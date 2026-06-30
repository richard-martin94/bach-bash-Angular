import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../api.config';
import { Bash, CreateBashDto, UpdateBashDto } from '../models/bash.model';

@Injectable({
  providedIn: 'root'
})
export class BashService {
  private apiUrl = `${API_CONFIG.baseUrl}/bashes`;

  constructor(private http: HttpClient) { }

  // GET all bashes
  getAllBashes(): Observable<Bash[]> {
    return this.http.get<Bash[]>(this.apiUrl);
  }

  // GET single bash by ID
  getBashById(bashId: string): Observable<Bash> {
    return this.http.get<Bash>(`${this.apiUrl}/${bashId}`);
  }

  // GET all bashes owned by a member
  getBashByOwner(bashMemberId: string): Observable<Bash[]> {
    return this.http.get<Bash[]>(`${this.apiUrl}/owned/${bashMemberId}`);
  }

  // POST - Create a new bash
  createBash(createDto: CreateBashDto): Observable<Bash> {
    return this.http.post<Bash>(this.apiUrl, createDto);
  }

  // PUT - Update a bash
  updateBash(bashId: string, updateDto: UpdateBashDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${bashId}`, updateDto);
  }

  // DELETE - Delete a bash
  deleteBash(bashId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${bashId}`);
  }
}
