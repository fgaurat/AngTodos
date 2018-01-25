import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatTableModule,  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from '../message.service';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { FormBuilder } from '@angular/forms/src/form_builder';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TodoListComponent, TodoFormComponent, TodoReactiveFormComponent],
  exports: [
    TodoListComponent,
    TodoFormComponent,
    TodoReactiveFormComponent
  ],
  providers: [TodoService, MessageService]
})
export class TodoModule { }
