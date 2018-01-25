import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Todo } from './todo/todo';

@Injectable()
export class MessageService {

  private onNewTodo: Subject<Boolean> = new Subject<Boolean>();
  private onUpdateTodo: Subject<Todo> = new Subject<Todo>();
  public onNewTodo$ = this.onNewTodo.asObservable();
  public onUpdateTodo$ = this.onUpdateTodo.asObservable();

  constructor() { }

  newTodo() {
    this.onNewTodo.next(true);
  }

  updateTodo(todo:Todo){
    this.onUpdateTodo.next(todo);
  }
}
