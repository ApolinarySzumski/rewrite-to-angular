import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AssignTeamBadgeService } from '../../services/assignTeamBadge/assign-team-badge.service';
import { FetchUserDetailsService } from '../../services/fetchUserDetails/fetch-user-details.service';
import { FetchUserReposService } from '../../services/fetchUserRepos/fetch-user-repos.service';
import { UserDetailsType } from '../../types/UserDetailsType';
import { UserReposType } from '../../types/UserReposType';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterModule],
  template: `
    <section class="user-details-container">
      <ng-container *ngIf="userDetails$ | async as userDetails">
      <div class="user-details-header">
        <p class="user-details-profile">Profile</p>
        <a class="user-details-router-link" [routerLink]="['/']">Go to home page</a>
      </div>
      <div class="user-details-main">
        <div>
          <img class="user-details-image" [src]="userDetails.avatar"/>
        </div>
        <div class="user-details-right-container">
          <p class="user-details-username">{{userDetails.username}}</p>
          <p class="user-details-github-nickname">{{userDetails.githubNickname}}</p>
          <div class="user-details-inside-container">
            <p class="user-details-id">ID: #{{userDetails.id}}</p>
            <p class="user-card-team-badge" [class]="getTeamBadgeClass(userDetails.id)">{{getTeamBadgeText(userDetails.id)}}</p>
          </div>
          <a class="user-details-link" [href]="userDetails.link">Github page</a>
        </div>
      </div>
      </ng-container>
    </section>
    <section class="user-repos-container">
      <ng-container *ngIf="userRepos$ | async as userRepos">
      <p class="user-repos-repositories-counter">Repositories count: {{userRepos.length}}</p>
      <p class="user-repos-repositories-counter">Repositories List:</p>
      <div class="user-repos-repositories-list" *ngFor="let userRepo of userRepos; trackBy: trackById">
          <p class="user-repos-repositories-list-item">* {{userRepo.repoName}}</p>
      </div>
      </ng-container>
    </section>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  userDetails$!: Observable<UserDetailsType>
  userRepos$!: Observable<UserReposType[]>

  constructor(private readonly fetchUserDetailsService: FetchUserDetailsService, private readonly fetchUserReposService: FetchUserReposService, readonly assignTeamBadgeService: AssignTeamBadgeService) {

  }
  ngOnInit(): void {
    const userId = Number(this.route.snapshot.params['userId']);
    this.userDetails$ = this.fetchUserDetailsService.fetchUserDetails(userId);
    this.userRepos$ = this.fetchUserReposService.fetchUserRepos(userId);
  }

  getTeamBadgeClass(id: number | undefined): string {
    return id !== undefined ? this.assignTeamBadgeService.getTeamBadgeStyle(this.assignTeamBadgeService.assignTeamBadge(id)) : "";
  }
  getTeamBadgeText(id: number | undefined): string {
    return id !== undefined ? this.assignTeamBadgeService.assignTeamBadge(id) : "";
  }
  trackById(index: number, item: UserReposType): number {
    return item.repoId;
  }
}
