import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/TodoService';
import {Todo} from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(value => {
      this.todos = value;
    });
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id).then(value => {
      this.getTodos();
    });
  }

}
