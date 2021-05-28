import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5000/api/auth/';
const USER_API = 'http://localhost:5000/api/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    this.isLoggedIn=true;
    return this.http.post(AUTH_API + 'dangnhap', {
      email,
      password
    }, httpOptions);
  }

  register(fullname: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'dangki', {
      fullname,
      email,
      password
    }, httpOptions);
  }
}
