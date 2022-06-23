import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UrnaSenderService {
  url = 'http://localhost:8000/urna-api/vote/'

  constructor(private htpp: HttpClient) {
  }

  vote(body: {}) {
    return this.htpp.post(this.url, body);
  }
}
