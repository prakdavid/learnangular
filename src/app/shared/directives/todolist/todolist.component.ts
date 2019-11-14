import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TodoList } from '../../models/todolist.model';
import { TodoListService } from '../../services/todolist.service';

@Component({
  selector: 'shared-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers: [
    TodoListService
  ]
})
export class TodolistComponent implements OnInit {
  public todoList: TodoList[];
  @ViewChild('inputItem', {static: false}) public inputItem: ElementRef;

  constructor(private todolistService : TodoListService) {
    todolistService.list.subscribe( (list : TodoList[]) => {
      this.todoList = list;
    } );
  }

  ngOnInit() {
  }

  addItem() {
    this.todolistService.add(this.inputItem.nativeElement.value);
  }

}
