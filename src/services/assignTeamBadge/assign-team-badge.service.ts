import { Injectable } from '@angular/core';
import { TeamBadgesClassesType } from '../../types/TeamBadgesClassesType';
import { TeamBadgesType } from '../../types/TeamBadgesType';

@Injectable({
  providedIn: 'root'
})
export class AssignTeamBadgeService {
  assignTeamBadge(id: number): string {
    if (id % 4 === 0 && id % 6 === 0) return TeamBadgesType.Team_C;
    else if (id % 6 === 0) return TeamBadgesType.Team_B;
    else if (id % 4 === 0) return TeamBadgesType.Team_A;
    else return "";
  }

  getTeamBadgeStyle(teamBadge: string): string {
    switch (teamBadge) {
      case TeamBadgesType.Team_A:
        return TeamBadgesClassesType.teamA;
      case TeamBadgesType.Team_B:
        return TeamBadgesClassesType.teamB;
      case TeamBadgesType.Team_C:
        return TeamBadgesClassesType.teamC;
      default:
        return "";
    }
  }
}
