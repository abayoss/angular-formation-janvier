import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  edit = false;
  myPosts: any = [];
  newPost = {
    title: '',
    body: ''
  };
  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.postService._getPosts()
    .subscribe((res: any[]) =>  this.myPosts = res );
  }
  addPost() {
    this.postService.createPost(this.newPost)
        .subscribe(res => {
          this.myPosts.unshift(this.newPost);
          this.newPost = {
            title: '',
            body: ''
          };
        });
  }

  editPost(post) {
    this.newPost = post;
    console.log(this.newPost);
    this.edit = true;
  }

  updatePost() {
    this.postService.putPost(this.newPost)
        .subscribe(res => {
          this.edit = false;
          this.newPost = {
            title: '',
            body: ''
          };
        },
        err => console.error(err));
  }


  removePost(index, id) {
    this.postService.deletePost(id)
        .subscribe(res => this.myPosts.splice(index, 1));
  }
}
