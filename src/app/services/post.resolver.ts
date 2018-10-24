import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Post } from '../shared/Post';
import { HttpService } from './http.service';

@Injectable()
export class PostResolver implements Resolve<Observable<Array<Post>>> {

  constructor (private http: HttpService, private router: Router) {}

  resolve(): Observable<Array<Post>> {
    if (this.http.Posts) {
      return this.http.Posts;
    } else { this.router.navigate(['/callendar']); }
  }
}
