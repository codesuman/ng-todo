import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  fav = [];
  todoList: Todo[] = [];

  constructor(private http: HttpClient, private deletePopup: ToastrService) { }

  async getTodos(): Promise<any> {
    return await this.http.get(`/api/todos`).toPromise();
  }

  deleteTodo(item) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);

    // this.deletePopup.success(`Todo ${item.id} Deleted!`);
  }

  addTodo(title) {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id,
      title,
      isCompleted: false,
      isFavorite: false,
      date: new Date()
    }
    
    this.todoList.unshift(item);
  }

  updateFav(){
    this.fav = JSON.parse(localStorage.getItem('favorite'));
  }
}
