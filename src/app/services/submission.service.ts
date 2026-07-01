import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../api.config';
import { Observable } from 'rxjs';
import { Submission, CreateSubmissionDto, UpdateSubmissionDto} from '../models/submission.model';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private apiUrl = `${API_CONFIG.baseUrl}/submissions`;

  constructor(private http: HttpClient) { }
  //get - get submission
  getSubmissionById(submissionId: string): Observable<Submission> {
    return this.http.get<Submission>(`${this.apiUrl}/${submissionId}`);
  }
  //get - get all submissions by challenge
  getSubmissionsByChallenge(challengeId: string): Observable<Submission[]>
  {
    return this.http.get<Submission[]>(`${this.apiUrl}/challenge/${challengeId}`);
  }
  //get - get all submissions by basher
  getSubmissionsByBasher(basherId: string): Observable<Submission[]>
  {
    return this.http.get<Submission[]>(`${this.apiUrl}/basher/${basherId}`);
  }
  //get - get submission from challenge by basher
  getSubmissionFromChallengeByBasher(challengeId: string, basherId: string): Observable<Submission>
  {
    return this.http.get<Submission>(`${this.apiUrl}/challenge-basher/${challengeId}/${basherId}`);
  }
  //post - create new submission
  createSubmission(createDto: CreateSubmissionDto): Observable<Submission>
  {
    return this.http.post<Submission>(this.apiUrl, createDto);
  }
  //put - update submission
  updateSubmission(submissionId: string, updateDto: UpdateSubmissionDto): Observable<void>
  {
    return this.http.put<void>(`${this.apiUrl}/${submissionId}`, updateDto);
  }
  //put - update submissions by challengeId
  updateSubmissionsByChallenge(challengeId: string, updateDtos: UpdateSubmissionDto[]): Observable<void>
  {
    return this.http.put<void>(`${this.apiUrl}/challenge/${challengeId}`, updateDtos);
  }
  //delete - delete a submission
  deleteSubmission(submissionId: string): Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${submissionId}`);
  }


}
