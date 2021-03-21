import { Team } from './team.model';

export class Board {
  constructor(public name: string, public teams: Team[]) { }
}