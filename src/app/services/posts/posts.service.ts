import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClien: HttpClient) {
  }

  getAllPosts(): Observable<IPost[]> {
    return this.httpClien.get<IPost[]>(this.url);
  }

  getPostById(id : number) : Observable<IPost>{
    return  this.httpClien.get<IPost>(this.url + '/' + id);
  }
}

