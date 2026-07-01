import { Bash } from './bash.model';
import { Basher } from './basher.model';
export interface BashMember {
  basherId: string;
  bashId: string;
  bash?: Bash;
  basher?: Basher;
}
export interface CreateBashMemberDto {
  bashId: string;
  basherId: string;
}

