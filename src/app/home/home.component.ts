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

  //Used now for setting structure up until db is going
  demoPosts: Post[] = [
    {
      id: "1",
      userID: "12341",
      title: "First title",
      content: "Content of first post!"
    },
    {
      id: "2",
      userID: "12342",
      title: "Second title",
      content: "Content of second post!"
    },
    {
      id: "3",
      userID: "12343",
      title: "Third title",
      content: "Content of third post!"
    },
    {
      id: "4",
      userID: "12344",
      title: "Fourth title",
      content: "Content of fourth post!"
    },
    {
      id: "5",
      userID: "12345",
      title: "Fifth title",
      content: "Content of fifth post!"
    },
  ];

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
