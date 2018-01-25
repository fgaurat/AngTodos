import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {

  private onNewTodo: Subject<Boolean> = new Subject<Boolean>();
  public onNewTodo$ = this.onNewTodo.asObservable();

  constructor() { }

  newTodo() {
    this.onNewTodo.next(true);
  }
}
