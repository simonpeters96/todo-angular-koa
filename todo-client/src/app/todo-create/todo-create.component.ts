import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/Todo';
import {TodoService} from '../services/TodoService';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {

  model: Todo;

  constructor(private todoService: TodoService) {
    this.model = {} as Todo;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.todoService.createTodo(this.model);
  }
}
