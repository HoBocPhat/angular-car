import { Injectable } from '@angular/core';
import { LoginData } from 'src/app/models/loginData';
import {Router} from '@angular/router'
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";

export interface LoginForm {
  name: string;
  password: string;
}

export interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
  location: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly mockedUser = new LoginData('Ngo Vy','123'); // tạo login data để đăng nhập thành công
  public name = this.mockedUser.getName();
  isAuthenticated = false;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }
  authenticate(loginData: LoginData): boolean { // hàm này được gọi ra ở ngoài
    if(this.checkAccount(loginData)){
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }
  private checkAccount(loginData: LoginData): boolean { // ktra name và pass có đúng kh
    return this.checkName(loginData.getName()) && this.checkPassword(loginData.getPassword());
  }
  private checkName(name:string):boolean{
    return name === this.mockedUser.getName();
  }
  private checkPassword(password: string):boolean{
    return password === this.mockedUser.getPassword();
  }
  logout() { //đổi header và quay về trang chủ
    this.isAuthenticated = false;
    this.router.navigate(['/trangchu']);
  }
  register(user : User) { // ch xài
    this.router.navigate(['/dangnhap']);
    return this.http.post<any>('api/user', user).pipe(
      map(user => user)
    )
  }


}
