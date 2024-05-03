import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // login(username: string, password: string): Observable<any> {
  //         return this.http.post('http://localhost:3001/api/login', {username, password});
  // }
  login(username: string, password: string): Observable<any> {
    return this.http.post<{message: string, user?: any}>('http://localhost:3001/api/login', {username, password});
}
}
