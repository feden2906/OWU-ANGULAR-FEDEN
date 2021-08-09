import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ITodo} from "../../../models";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input()
  todo: ITodo

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  navigateToTodoDetails() {
    this.router.navigate([this.todo.id], {relativeTo: this.activatedRoute, state: this.todo})
  }

}
