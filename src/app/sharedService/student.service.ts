import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { ApiFunctionsService2 } from './ApiFunctionsService2';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends ApiFunctionsService2<Student> {

  constructor(public http: HttpClient) {
    super("http://localhost:3000/student", http);
  }
}
