import { Component, OnInit } from '@angular/core';

import {ITodo} from "../../../models";
import {TodosService} from "../../../services";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos : ITodo[]

  constructor(private todosService : TodosService) { }

  ngOnInit(): void {
    this.todosService.getAllTodos().subscribe(value => this.todos = value)
  }

}
