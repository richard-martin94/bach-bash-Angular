import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../api.config';
import { Observable } from 'rxjs';
import { Challenge, CreateChallengeDto, UpdateChallengeDto} from '../models/challenge.model';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  private apiUrl = `${API_CONFIG.baseUrl}/challenges`;

  constructor(private http: HttpClient) {
  }
  // get - get challenge
  getChallengeById(challengeId: string): Observable<Challenge> {
    return this.http.get<Challenge>(`${this.apiUrl}/${challengeId}`);
  }
  //get - get all challenges from bash
  getAllChallengesByBashId(bashId: string): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(`${this.apiUrl}/bash/${bashId}`);
  }
  //post - create new challenge
  createChallenge(createDto: CreateChallengeDto): Observable<Challenge> {
    return this.http.post<Challenge>(this.apiUrl, createDto);
  }
  //put - update challenge
  updateChallenge(challengeId: string, updateDto: UpdateChallengeDto): Observable<void>
  {
    return this.http.put<void>(`${this.apiUrl}/${challengeId}`, updateDto);
  }
  //put - update all challenges by bash id
  updateAllChallengesByBashId(bashId: string, updateDtos: UpdateChallengeDto[]): Observable<void>
  {
    return this.http.put<void>(`${this.apiUrl}/bash/${bashId}`, updateDtos);
  }
  //delete - delete a challenge
  deleteChallenge(challengeId: string): Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${challengeId}`);
  }
  //delete - delete all challenges by bash id
  deleteAllChallengesByBash(bashId: string): Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/bash/${bashId}`);
  }

}
