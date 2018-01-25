import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service';
import { MessageService } from '../../message.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent implements OnInit {

  todoForm: FormGroup;
  todo:Todo;
  constructor(private fb: FormBuilder, private todoService: TodoService, private message: MessageService) { }

  ngOnInit() {
    this.createForm();
    this.message.onUpdateTodo$.subscribe(todo => {
      this.todo = todo;

      this.todoForm.patchValue({
        todoAction: todo.action,
        todoDueDate: todo.theDate
      });

    });

  }

  createForm() {

    this.todoForm = this.fb.group({
      todoAction: [''],
      todoDueDate: ['']
    });

  }

  create() {

    this.todo.action = this.todoForm.value.todoAction;
    this.todo.dueDate = this.todoForm.value.todoDueDate.getTime();

    this.todoService.createTodo(this.todo).subscribe(_ => {
      this.message.newTodo();
      this.todoForm.reset();
    });

  }
}
