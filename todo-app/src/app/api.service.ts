import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<any> {
    return this.http.get('http://localhost:3000/todolist');
  }

  createNewTodoTask(payload: any) {
    return this.http.post('http://localhost:3000/todolist', payload);
  }
}