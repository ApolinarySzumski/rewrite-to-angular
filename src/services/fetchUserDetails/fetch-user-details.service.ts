import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RequestUserDetailsType } from '../../types/RequestUserDetailsType';
import { UserDetailsType } from '../../types/UserDetailsType';
import { HttpClientService } from '../httpClient/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class FetchUserDetailsService {
  httpClient = this.httpClientService;

  constructor(private readonly httpClientService: HttpClientService) { }

  fetchUserDetails(userIdToSearch?: number): Observable<UserDetailsType> {
    return this.httpClient.http.get<RequestUserDetailsType>(`${this.httpClient.API_URL}/user/${userIdToSearch}`, this.httpClient.httpOptions).pipe(map((userDetails) => ({
      avatar: userDetails.avatar_url,
      username: userDetails.name,
      githubNickname: userDetails.login,
      id: userDetails.id,
      link: userDetails.html_url
    })))
  }
}
