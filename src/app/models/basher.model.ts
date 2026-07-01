import { Bash } from './bash.model';
export interface Basher {
  id: string;
  username: string;
  bash?: Bash;
}
export interface CreateBasherDto {
  username: string;
}
export interface UpdateBasherDto {
  username: string;
}
