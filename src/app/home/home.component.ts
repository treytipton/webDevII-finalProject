import { Component, OnInit, OnDestroy, contentChild } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  postList: Post[] = [];
  private postSub: Subscription;

  constructor(public postService: PostService){}

  ngOnInit(): void {
      this.postList = this.postService.getPosts();
      this.postSub = this.postService.getPostUpdateListener().subscribe((posts: Post[]) =>{
        this.postList = posts;
      });
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
}


  //As backend starts to get built, I will integrate with Post Service
  onAddPost(form: NgForm) {
    const newPost: Post = {
      id: "123456",
      userID: "654321",
      title: form.value.title,
      content: form.value.content
    }
    this.demoPosts.push(newPost)
  }

}
