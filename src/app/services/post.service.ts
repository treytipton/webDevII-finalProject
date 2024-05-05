import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private posts: Post[] = [];
  private postUpdate = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    this.httpClient.get<{message: String, posts: Post[]}>('http://localhost:3000/api/posts').subscribe((postData)=> {
      this.posts = postData.posts;
      this.postUpdate.next([...this.posts]);
    });
    return[...this.posts];
  }

  getPostUpdateListener() {
    return this.postUpdate.asObservable();
  }

  deletePost(postID: string) {
    this.httpClient.delete("http://localhost:3000/api/posts"+postID).subscribe(() => { //Or whatever endpoint we use
      const updatedPost = this.posts.filter(post => post.id !== postID);
      this.posts = updatedPost;
      this.postUpdate.next([...this.posts]);
    })
  }

  addPost() {
    // will complete when we know definitively what attributes make up post and backend is setup
  }

}
