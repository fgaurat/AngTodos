import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatTableModule,  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from '../message.service';


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
    FormsModule
  ],
  declarations: [TodoListComponent, TodoFormComponent],
  exports: [
    TodoListComponent,
    TodoFormComponent
  ],
  providers: [TodoService,MessageService]
})
export class TodoModule { }
