import { Component,OnInit  } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements  OnInit  {
  posts: any[];
  originalPosts: any[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
      this.originalPosts = data;

    });
  }

  search(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === '') {
      this.posts = this.originalPosts;
    } else {
      this.posts = this.originalPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm)
      );
    }
  }

}
