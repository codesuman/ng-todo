import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {
  constructor(public todoService: TodoService, public route: ActivatedRoute) { }

  todoList: any[] = [];

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      if(url[0].path === 'favorite') {
        this.todoList = this.todoService.todoList.filter(x => x.isFavorite); 
      } else {
        this.todoList = this.todoService.todoList;
      }
    });
  }

}
