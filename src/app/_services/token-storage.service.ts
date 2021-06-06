import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'authorization';

const AUTH_API = 'http://localhost:5000/api/auth/';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private http: HttpClient) { }

  signOut():  Observable<Object> {
    window.sessionStorage.clear();
    return this.http.post(AUTH_API + 'dangxuat',{

    });
  }

  signOutAll(): Observable<Object> {
    window.sessionStorage.clear();
    return this.http.post(AUTH_API + 'dangxuat-all', {

    })
  }

  public saveToken(userToken: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, userToken);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
