import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../todo';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  displayedColumns = ['id', 'action', 'dueDate', 'done', 'actions'];
  dataSource = new MatTableDataSource();

  public todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos$ = this.todoService.getTodos();
    this.todos$.subscribe( todos => this.dataSource.data = todos);
  }

}
