import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {catchError, map} from 'rxjs/operators';
// import {catch} from 'rxjs/operators'
import { error } from '@angular/compiler/src/util';
const AUTH_API = 'http://localhost:5000/api/auth/';
const USER_API = 'http://localhost:5000/api/user/';
const ADMIN_API = 'http://localhost:5000/api/admin/';
const POST_API = 'http://localhost:5000/api/post/';
const NEWS_API = 'http://localhost:5000/api/news/';

const httpOptions = {
  headers: new HttpHeaders({
                            'Content-Type': 'application/json'} )
};
const http = {
  headers : new HttpHeaders({
  'Content-Type': ' application/json',
  'Accept': 'multipart/form-data; boundary{}',

})};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn !: boolean;
  constructor(private http: HttpClient,
              private tokenService: TokenStorageService) { }
  handleError(error) {
    return throwError(error)}
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
    }, httpOptions).pipe(catchError(this.handleError));
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
    return this.http.delete(ADMIN_API + 'post/deletall',httpOptions).pipe(catchError(this.handleError));
  }

  deleteAll_News(): Observable<any> {
    return this.http.delete(ADMIN_API + 'news/deleteall',httpOptions).pipe(catchError(this.handleError));
  }

  deleteNews(id): Observable<any> {
    return this.http.delete(ADMIN_API + 'news/' + `${id}` + '/delete',httpOptions).pipe(catchError(this.handleError));
  }

  upNews(id, title: string, content: string): Observable<any> {
    return this.http.put(ADMIN_API + 'news/' + `${id}` + '/edit',{
      title, content
    }, httpOptions).pipe(catchError(this.handleError));
  }

  getDetailNews(slug): Observable<any> {
    return this.http.get(NEWS_API + `${slug}`,httpOptions);
  }

  createNews (title: string, content: string, image: FormData): Observable <any> {
    return this.http.post(ADMIN_API + 'news/create',{
      title,
      content,
      image
    }, httpOptions).pipe(catchError(this.handleError));
  }

  getUser () : Observable<any> {
    return this.http.get(ADMIN_API + 'users', httpOptions);
  }
  // User

  getDetailPost(slug): Observable<any> {
    return this.http.get(POST_API + `${slug}`,httpOptions);
  }

  savePost(id) : Observable<any> {
    return this.http.post(USER_API + 'saved/' + `${id}` , httpOptions).pipe(catchError(this.handleError));
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
                carPrice: number , formdata: FormData ) : Observable<any>{
                // let headers = new HttpHeaders();
                //   headers = headers.append('Content-Type', ' application/json; multipart/form-data; boundary {}');
                //   headers = headers.append('enctype', 'multipart/form-data');
                // var formdata = new FormData()
                // formdata.append('image', files);
                // console.log(formdata.get('image'));
      return this.http.post (USER_API + 'post/create', {
        title, contactProvince, contactDistrict, contactPhone, postContent, carType, carYear, carBrand,
        carModel, carSeats, carColor,carFuelType, carOdometer, carPrice, formdata
      }, http)
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
    }, httpOptions).pipe(catchError(this.handleError))
  }

  changePass (id , oldPassword: string, newPassword:string ): Observable<any>{
    return this.http.post(AUTH_API + `${id}` + '/updatePassword',{
      oldPassword,
      newPassword
    }, httpOptions).pipe(catchError(this.handleError))
  }

  forgotPass (email: string) : Observable <any> {
    return this.http.post(AUTH_API + 'forgotpassword',{
      email
    }, httpOptions).pipe(catchError(this.handleError));
  }
  resetPass (token, newPass: string) : Observable <any> {
    return this.http.post(AUTH_API + 'resetpassword/' + `${token}`,{
      newPass,
    },httpOptions).pipe(catchError(this.handleError));
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

  public uploadImage(title: string, content: string, newImage: File): Observable<any> {
    // var formData = new FormData();
    // formData.append('image', newImage);

    // const entries = formData.entries();

    // for ( const pair of entries) {

    // }
    // for (let [key, value] of formData){
    //   console.log(`${key}`, `${value}`);
    // }
//      console.log(formData.get('image'));
  return this.http.post(ADMIN_API + 'news/create',{
    title,
    content,
    newImage
  }, httpOptions);
  }


  createNew (title: string, content: string, newsImage: File): Observable <any> {
    return this.http.post(ADMIN_API + 'news/create',{
      title,
      content,
      newsImage
    }, httpOptions).pipe(catchError(this.handleError));
  }
}
