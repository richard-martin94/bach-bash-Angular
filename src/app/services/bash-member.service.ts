import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../api.config';

@Injectable({
  providedIn: 'root'
})
export class BashMemberService {

  constructor(private http: HttpClient) { }

}
