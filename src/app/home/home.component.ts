import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

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

}
