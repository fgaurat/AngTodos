import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo';


@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.url_todos);
  }

  deleteTodo(todo: Todo): Observable<any> {
    const url = `${environment.url_todos}/${todo.id}`;
    return this.http.delete<Todo>(url);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(environment.url_todos, todo);
  }

}
