import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoCreateComponent} from './todo-create/todo-create.component';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent},
  { path: 'create', component: TodoCreateComponent},
  { path: '', redirectTo: '/todos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
