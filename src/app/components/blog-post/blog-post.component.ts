import { Component, OnInit, Input } from '@angular/core';
import { blogPost } from 'src/app/interfaces/blogPost';

@Component({
  selector: 'blog-post-component',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() post: blogPost;
  constructor() { }

  ngOnInit() {
  }

}
