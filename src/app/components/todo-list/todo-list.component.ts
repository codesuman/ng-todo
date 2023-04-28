import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {
  constructor(public route: ActivatedRoute, public todoService: TodoService) { }

  todoList: any[] = [];

  ngOnInit() {
    this.route.url.subscribe(async url => {
      if(url[0].path === 'favorite') {
        this.todoList = this.todoService.fav;
      } else {
        this.todoList = await this.todoService.getTodos(); 
      }
    });
  }

}
