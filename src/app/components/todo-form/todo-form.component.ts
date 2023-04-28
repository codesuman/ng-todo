import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styles: []
})
export class TodoFormComponent implements OnInit {

  todo: string;

  constructor(private router: Router, public todoService: TodoService) { }

  ngOnInit(): void {
    this.todo = '';
  }

  onSubmit(){
    this.todoService.addTodo(this.todo);
    this.router.navigate(['/list'])
    this.todo = '';
  }
}
