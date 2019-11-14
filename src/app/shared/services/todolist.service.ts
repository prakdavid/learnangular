import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { TodoList } from '../models/todolist.model';


@Injectable()
export class TodoListService {
    public list: BehaviorSubject<TodoList[]> = new BehaviorSubject(null);

    constructor() {
        // get it from API later
        let _list: TodoList[] = [
            new TodoList('first line', false),
            new TodoList('seconde line', false),
            new TodoList('third line', true),
        ];
        this.list.next(_list);
    }

    add(el: string): void {
        let currentList = this.list.value;
        currentList.push(new TodoList(el, false));
        this.list.next(currentList);
      }

}