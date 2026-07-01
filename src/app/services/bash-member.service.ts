import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../api.config';
import {BashMember, CreateBashMemberDto} from '../models/bash-member.model';

@Injectable({
  providedIn: 'root'
})
export class BashMemberService {
  private apiUrl = `${API_CONFIG.baseUrl}/bashmembers`;

  constructor(private http: HttpClient) { }


  // GET list of all bashes where this basher is a member
  getBashesByMember(bashMemberId: string): Observable<BashMember[]> {
    return this.http.get<BashMember[]>(`${this.apiUrl}/${bashMemberId}`);
  }

  // GET list of all bashers who are members of this bash
  getMembersByBash(bashId: string): Observable<BashMember[]> {
    return this.http.get<BashMember[]>(`${this.apiUrl}/bash/${bashId}`);
  }

  // POST - Create a new bash member relationship
  createBashMember(createDto: CreateBashMemberDto): Observable<BashMember> {
    return this.http.post<BashMember>(this.apiUrl, createDto);
  }

  // DELETE - Delete all bash members from a bash
  deleteBashMembersFromBash(bashId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/bash/${bashId}`);
  }

  // DELETE - Delete a bash member from all bashes
  deleteBashMemberFromAllBashes(bashMemberId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/member/${bashMemberId}`);
  }

  // DELETE - Delete a bash member from a bash
  deleteBashMemberFromBash(bashId: string, bashMemberId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/member-bash/${bashMemberId}/${bashId}`);
  }
}
