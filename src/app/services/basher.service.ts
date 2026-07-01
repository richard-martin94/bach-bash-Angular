import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../api.config';
import { Observable } from 'rxjs';
import {Basher, CreateBasherDto, UpdateBasherDto} from '../models/basher.model';

@Injectable({
  providedIn: 'root'
})
export class BasherService {
  private apiUrl = `${API_CONFIG.baseUrl}/bashers`;

  constructor(private http: HttpClient) { }

  //get - get a list of all bashers
  getAllBashers():Observable<Basher[]>
  {
    return this.http.get<Basher[]>(`${this.apiUrl}/`);
  }

  //get - get all bashers from bash
  getAllBashersFromBash(bashId: string):Observable<Basher[]>
  {
    return this.http.get<Basher[]>(`${this.apiUrl}/bash/${bashId}`);
  }
  //get - get specific basher
  getBasherById(basherId: string): Observable<Basher>
  {
    return this.http.get<Basher>(`${this.apiUrl}/basher/${basherId}`);
  }
  //post - create a new basher
  createBasher(createDto: CreateBasherDto): Observable<Basher>
  {
    return this.http.post<Basher>(this.apiUrl, createDto);
  }
  //put - update basher
  updateBasherById(basherId: string, updateDto: UpdateBasherDto): Observable<void>
  {
    return this.http.put<void>(`${this.apiUrl}/${basherId}`, updateDto);
  }
  //delete - delete a basher
  deleteBasherById(basherId: string): Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${basherId}`);
  }
}
