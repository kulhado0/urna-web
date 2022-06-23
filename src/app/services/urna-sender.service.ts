import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UrnaSenderService {
  url = 'http://localhost:8000/urna-api/vote/'

  constructor(private htpp: HttpClient) {

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true,
  };

  vote(body: {}) {
    return this.htpp.post<any>(this.url, body, this.httpOptions);
  }
}
