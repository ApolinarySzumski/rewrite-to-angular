import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RequestUserReposType } from '../../types/RequestUserReposType';
import { UserReposType } from '../../types/UserReposType';
import { HttpClientService } from '../httpClient/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class FetchUserReposService {
  httpClient = this.httpClientService;

  constructor(private readonly httpClientService: HttpClientService) { }

  fetchUserRepos(userId?: number): Observable<UserReposType[]> {
    return this.httpClient.http.get<RequestUserReposType[]>(`${this.httpClient.API_URL}/user/${userId}/repos?per_page=100`, this.httpClient.httpOptions).pipe(map((repos) => repos.map(repo => ({
      repoName: repo.name,
      repoId: repo.id
    }))))
  }
}
