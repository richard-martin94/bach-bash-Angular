import { Bash } from './bash.model';
export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  bashId: string;
  bash?: Bash;
}
export interface CreateChallengeDto {
  title: string;
  description: string;
  points: number;
}
export interface UpdateChallengeDto {
  title: string;
  description: string;
  points: number;
}
