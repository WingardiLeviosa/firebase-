import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiFunctionsService2<E> {

  constructor(@Inject(String) public configUrl: string, public http: HttpClient) {
  }

  getStudent(): Observable<E> {
    return this.http.get<E>(this.configUrl);
  }

  post(object2: E): Observable<E> {
    return this.http.post<E>(this.configUrl, object2);
  }

  delete(id: any): Observable<E> {
    return this.http.delete<E>(this.configUrl + `/${id}`);
  }

  put(object2: E, id: any): Observable<E> {
    return this.http.put<E>(this.configUrl + `/${id}`, object2);
  }
}
