import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodolistComponent } from './directives/todolist/todolist.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodolistComponent
  ],
  exports: [
    TodolistComponent
  ]
})
export class SharedModule { }
