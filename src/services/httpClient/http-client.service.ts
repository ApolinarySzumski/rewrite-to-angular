import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  API_URL = "https://api.github.com"
  readonly http: HttpClient = inject(HttpClient);
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      Authorization: 'Bearer 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',
      Accept: 'application/vnd.github.v3+json',
    }),
  }
}
