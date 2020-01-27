import { Component, OnInit } from '@angular/core';
import { BlogPostService } from 'src/app/services/blog-post.service';
import { blogPost } from 'src/app/interfaces/blogPost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: blogPost[] = [];

  constructor(public blogService: BlogPostService) { }

  ngOnInit() {
    this.blogService.getBlogPostCollection().subscribe(res => {
      this.posts = res;
      console.log(this.posts);
    })
  }

}
