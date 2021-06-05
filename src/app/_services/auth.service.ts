import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

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

  login(email: string, password: string): Observable<any> {
    this.isLoggedIn = true;
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
  createNewPost (title: string, contactProvince: string, contactDistric: string,
                contactPhone: string, postContent: string, carType: string, carBrand: string,
                carModel: string, carSeat: number, carColor: string, carOdometer: number,
                carYear: number, carPrice: number, image: any) : Observable<any>{
      return this.http.post (USER_API + 'post/create', {
        title, contactProvince, contactDistric, contactPhone, postContent, carType, carBrand,
        carModel, carSeat, carColor, carOdometer, carYear, carPrice, image
      }, httpOptions)
  }
}
