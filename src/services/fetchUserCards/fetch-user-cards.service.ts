import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RequestUserCardsType } from '../../types/RequestUserCardsType';
import { UserCardsType } from '../../types/UserCardsType';
import { HttpClientService } from '../httpClient/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class FetchUserCardsService {
  httpClient = this.httpClientService;

  constructor(private readonly httpClientService: HttpClientService) { }

  fetchUserCards(lastId?: number): Observable<UserCardsType[]> {
    return this.httpClient.http.get<RequestUserCardsType[]>(`${this.httpClient.API_URL}/users?per_page=30&since=${lastId}`, this.httpClient.httpOptions).pipe(map((users) => users.map(user => ({
      avatar: user.avatar_url,
      githubNickname: user.login,
      id: user.id,
      link: user.html_url
    }))))
  }
}
