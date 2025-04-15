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
