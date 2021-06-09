import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {catchError, map} from 'rxjs/operators';
// import {catch} from 'rxjs/operators'
import { error } from '@angular/compiler/src/util';
const AUTH_API = 'http://localhost:5000/api/auth/';
const USER_API = 'http://localhost:5000/api/user/';
const ADMIN_API = 'http://locoalhost:5000/api/admin/';
const POST_API = 'http://localhost:5000/api/post/';
const NEWS_API = 'http://localhost:5000/api/news/';

const httpOptions = {
  headers: new HttpHeaders({
                            'Content-Type': 'application/json' } )
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn !: boolean;
  constructor(private http: HttpClient,
              private tokenService: TokenStorageService) { }
  handleError(error) {
    return throwError(error.message)}
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'dangnhap', {
      email,
      password
    }, httpOptions).pipe(catchError(this.handleError));
  }

  register(fullname: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'dangki', {
      fullname,
      email,
      password
    }, httpOptions);
  }
  getCarByBrand(brand: string) : Observable<any> {
    return this.http.get(POST_API + 'list/brand/' + `${brand}`, httpOptions);
  }
  //Admin

  getAll_Posts() : Observable<any> {
    return this.http.get(POST_API + 'all',httpOptions);
  }

  getAllNews() : Observable<any> {
    return this.http.get(NEWS_API + 'all',httpOptions);
  }

  delleteAll_Post(): Observable<any> {
    return this.http.delete(ADMIN_API + 'post/deletall',httpOptions);
  }

  deleteAll_News(): Observable<any> {
    return this.http.delete(ADMIN_API + 'news/deleteall',httpOptions);
  }

  deleteNews(id): Observable<any> {
    return this.http.delete(ADMIN_API + 'news/' + `${id}` + '/delete');
  }

  upNews(id): Observable<any> {
    return this.http.put(ADMIN_API + 'news/' + `${id}` + '/edit', httpOptions);
  }

  getDetailNews(slug): Observable<any> {
    return this.http.get(NEWS_API + `${slug}`,httpOptions);
  }

  createNews (title: string, content: string, image: string): Observable <any> {
    return this.http.post(ADMIN_API + 'news/create',{
      title,
      content,
      image
    }, httpOptions);
  }

  getUser () : Observable<any> {
    return this.http.get(ADMIN_API + 'user', httpOptions);
  }
  // User

  getDetailPost(slug): Observable<any> {
    return this.http.get(POST_API + `${slug}`,httpOptions);
  }

  savePost(id) : Observable<any> {
    return this.http.post(USER_API + 'saved/' + `${id}` , httpOptions)
  }

  getSavedPost() : Observable<any> {
    return this.http.get(USER_API + 'saved/list',httpOptions);
  }

  removeSavedPost(id) : Observable<any> {
    return this.http.put(USER_API + 'saved/remove/' + `${id}`, httpOptions);
  }

  createNewPost (title: string,postContent: string, contactProvince: string, contactDistrict: string,
                contactPhone: string, carBrand: string,
                carModel: string, carType: string, carYear: string,  carSeats: number, carColor: string, carFuelType: string, carOdometer: number,
                carPrice: number ) : Observable<any>{
      return this.http.post (USER_API + 'post/create', {
        title, contactProvince, contactDistrict, contactPhone, postContent, carType, carYear, carBrand,
        carModel, carSeats, carColor,carFuelType, carOdometer, carPrice
      }, httpOptions)
  }
  updatePost (id , title: string,postContent: string, contactProvince: string, contactDistrict: string,
    contactPhone: string, carBrand: string,
    carModel: string, carType: string, carYear: string,  carSeats: number, carColor: string, carFuelType: string, carOdometer: number,
    carPrice: number){
      return this.http.put(USER_API + 'post/' + `${id}` + '/edit',{
        title, contactProvince, contactDistrict, contactPhone, postContent, carType, carBrand,
        carModel, carSeats, carColor,carFuelType, carOdometer, carYear, carPrice
      }, httpOptions)
    }


  delRelatedPost (id): Observable<any> {
    return this.http.delete(USER_API + 'post/' + `${id}` + '/delete',httpOptions)
  }

  delRelatedAllPost (): Observable<any> {
    return this.http.delete (USER_API + 'post/deleteall', httpOptions)
  }

  // getRelatedPost(): Observable<any>{
  //   return this.http.get (USER_API + 'list', httpOptions);
  // }

  changeInfo (fullname: string, phone: string, address: string): Observable<any> {
    return this.http.post(AUTH_API + 'changeaccount',{
      fullname,
      phone,
      address
    }, httpOptions)
  }

  changePass (id , oldPassword: string, newPassword:string ): Observable<any>{
    return this.http.post(AUTH_API + `${id}` + '/updatePassword',{
      oldPassword,
      newPassword
    }, httpOptions)
  }

  forgotPass (email: string) : Observable <any> {
    return this.http.post(AUTH_API + 'forgotpassword',{
      email
    }, httpOptions)
  }
  resetPass (token, newPass: string) : Observable <any> {
    return this.http.post(AUTH_API + 'resetpassword/' + `${token}`,{
      newPass,
    },httpOptions)
  }

  loginFace(): Observable<any> {
    return this.http.post(AUTH_API + 'loginFacebook',httpOptions)
  }

  loginGoogle(): Observable<any> {
    return this.http.post(AUTH_API + 'loginGoogle',httpOptions);
  }
  getInfor(): Observable<any> {
    return this.http.get(USER_API + 'account',httpOptions);
  }
}
