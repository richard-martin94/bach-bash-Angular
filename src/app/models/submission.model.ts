import { Basher } from './basher.model';
import { Challenge } from './challenge.model';
export interface Submission {
  id: string;
  challengeId: string;
  basherId: string;
  place: number;
  basher?: Basher;
  challenge?: Challenge;
}
export interface CreateSubmissionDto {
  challengeId: string;
  basherId: string;
  place: number;
}
export interface UpdateSubmissionDto {
  challengeId: string;
  basherId: string;
  place: number;
}
