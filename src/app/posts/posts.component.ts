import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postServices: PostService) { }
  myPosts: any = [];
  newPost = {
    title: '',
    body: ''
  };
  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.postServices._getPosts()
    .subscribe((res: any[]) =>  this.myPosts = res );
  }
  addPost() {
    this.postServices.createPost(this.newPost)
    .subscribe(res =>  console.log(res) );
  }
}
