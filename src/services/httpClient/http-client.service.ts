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
      // Authorization: 'Bearer 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',
      Accept: 'application/vnd.github.v3+json',
    }),
  }
}
