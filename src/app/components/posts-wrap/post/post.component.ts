import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../../models";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input()
  post : IPost;

  constructor(private router : Router, private activatedRoute : ActivatedRoute) { }

  navigateToPostDetails() {
    this.router.navigate([this.post.id], {relativeTo : this.activatedRoute});
  }

}
