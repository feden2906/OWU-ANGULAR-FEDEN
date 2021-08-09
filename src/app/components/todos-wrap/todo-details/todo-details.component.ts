import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ITodo} from "../../../models";
import {TodosService} from "../../../services";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  todo: ITodo

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private todoService: TodosService) {
    this.activatedRoute.params.subscribe(value => {
        // Check existence .extras.state from previous component
        this.router.getCurrentNavigation()?.extras.state                                     // TODO state OR fetch
          ? this.todo = this.router.getCurrentNavigation()?.extras.state as ITodo
          : this.todoService.getTodoById(value.id).subscribe(value => this.todo = value)
      }
    )
  }

}
