import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../shared/Post';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_PATH = 'https://api.nbp.pl/api/cenyzlota/';
  private start: string;
  private end: string;

  constructor(private http: HttpClient) { }

  // wyślij zapytanie na serwer
  public get Posts(): Observable<Array<Post>> {
    if (this.start && this.end) {
      return this.http.get<Array<Post>>(`${this.URL_PATH}${this.start}/${this.end}`);
    }
  }

  public set dateForPosts({start, end}) {
    this.start = start;
    this.end = end;
  }
}
