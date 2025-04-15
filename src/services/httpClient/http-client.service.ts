import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const key = environment.apiKey
@Injectable({
  providedIn: 'root'
})

export class HttpClientService {
  API_URL = "https://api.github.com"
  readonly http: HttpClient = inject(HttpClient);
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${key}`,
      Accept: 'application/vnd.github.v3+json',
    }),
  }
}
