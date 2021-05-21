import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // constructor(private http: HttpClient) { }
  // fetchPost(): Observable<Object> {
  //   this.http.get('/assets/data/post.json');
  // }
}
