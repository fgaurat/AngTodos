import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';
import { Todo } from '../todo';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  displayedColumns = ['id', 'action', 'dueDate', 'theDate', 'done', 'actions'];
  dataSource = new MatTableDataSource();

  public todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos$ = this.todoService.getTodos().pipe(
      map(todos => {
        for(let todo of todos){
          todo.theDate = new Date(todo.dueDate);
        }
        return todos;
      })
    );
    this.todos$.subscribe( todos => this.dataSource.data = todos);
  }


  delete(element: Todo) {
    this.todoService
      .deleteTodo(element).pipe(
        switchMap(_ => this.todoService.getTodos()),
      )
      .subscribe(todos => this.dataSource.data = todos);
    console.log(element);
  }

}
