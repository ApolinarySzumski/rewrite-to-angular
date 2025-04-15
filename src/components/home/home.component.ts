import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mergeMap, Observable, scan } from 'rxjs';
import { AssignTeamBadgeService } from '../../services/assignTeamBadge/assign-team-badge.service';
import { FetchUserCardsService } from '../../services/fetchUserCards/fetch-user-cards.service';
import { UserCardsType } from '../../types/UserCardsType';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  template: `
<section class="user-card-section">
  <div class="user-card-container">
    <ng-container *ngIf="userCards$ | async as userCards">
      <div *ngFor="let userCard of userCards; trackBy: trackById" class="user-card">
        <div class="user-card-top-container">
          <div>
            <img class="user-card-image" [src]="userCard.avatar" />
          </div>
          <div class="user-card-right-container">
            <h2 class="user-card-github-nickname">{{ userCard.githubNickname }}</h2>
            <div class="user-card-inside-container">
              <p class="user-card-id">ID: #{{ userCard.id }}</p>
              <p class="user-card-team-badge" [class]="getTeamBadgeClass(userCard.id)">
                {{ getTeamBadgeText(userCard.id) }}
              </p>
            </div>
            <a class="user-card-link" [href]="userCard.link" target="_blank">GitHub page</a>
          </div>
        </div>
        <div>
          <span class="user-card-details-container">
            <a class="user-card-details-link" [routerLink]="['/user', userCard.id]">Details</a>
          </span>
        </div>
      </div>
      <button class="user-card-button" type="button" (click)="fetch(userCards?.at(-1)?.id)">Load more</button>
    </ng-container>
  </div>
</section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  userCards$!: Observable<UserCardsType[]>;

  constructor(private readonly fetchUserCardsService: FetchUserCardsService, readonly assignTeamBadgeService: AssignTeamBadgeService) { }

  ngOnInit() {
    this.userCards$ = this.fetchUserCardsService.fetchUserCards(0)
  }

  fetch(id: number | undefined): void {
    if (id === undefined) return;
    this.userCards$ = this.userCards$.pipe(mergeMap(existingCards => this.fetchUserCardsService.fetchUserCards(id + 1).pipe(scan((acc, newCards) => [...acc, ...newCards], existingCards))));
  }

  getTeamBadgeClass(id: number | undefined): string {
    return id !== undefined ? this.assignTeamBadgeService.getTeamBadgeStyle(this.assignTeamBadgeService.assignTeamBadge(id)) : ""
  }
  getTeamBadgeText(id: number | undefined): string {
    return id !== undefined ? this.assignTeamBadgeService.assignTeamBadge(id) : ""
  }

  trackById(index: number, item: UserCardsType): number {
    return item.id;
  }
}


