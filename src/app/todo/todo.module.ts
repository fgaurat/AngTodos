import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatTableModule,  MatButtonModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [TodoListComponent],
  exports: [
    TodoListComponent
  ],
  providers: [TodoService]
})
export class TodoModule { }
