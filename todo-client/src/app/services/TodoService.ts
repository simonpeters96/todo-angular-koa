import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/Todo';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {APIURL} from '../../environments/environment';

@Injectable()
export class TodoService {

  private apiUrl = APIURL;

  constructor(private http: HttpClient) {
  }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl).pipe(
      catchError(
        (err) => {
          console.error(err);
          return of([] as Todo[]);
        }
      )
    );
  }

  public createTodo(todo: Todo): Promise<any> {
    return this.http.post(this.apiUrl + '/todo', {
      title: todo.title,
      description: todo.description,
      timestamp: todo.timestamp.toISOString()
    }).toPromise();
  }

  // tslint:disable-next-line:ban-types
  public deleteTodo(id: string): Promise<Object> {
    return this.http.delete(this.apiUrl + '/' + id).toPromise();
  }
}
