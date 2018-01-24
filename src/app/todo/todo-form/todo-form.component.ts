import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  public todo: Todo = new Todo();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  create(){
    const d: Date = new Date(this.todo.dueDate);
    this.todo.dueDate = d.getTime();
    this.todoService.createTodo(this.todo).subscribe();
  }

}
