import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';
import { ApiFunctionsService } from './api-functions.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends ApiFunctionsService<Teacher> {
 
  constructor(public http: HttpClient) {
    super("http://localhost:3000/teacher", http);
  }
}
