import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Posts{
  id: string,
  carBrand: string,
  carOdometer: number,
  carPrice: number,
  contactDistrict: string,
  contactProvince: string,
  createdAt: string,
  postContent: string,
  contactPhone: string,
  postedBy: string,
  slug: string,
  imgPost: any
}
interface Newses{
  content: string,
  createdAt: string,
  id: string,
  postedBy: string,
  slug: string,
  title: string,
  updatedAt: string,
}
interface Users{
  id : string,
  fullname: string,
  email: string,
  password: string,
  phone: string,
  address: string
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public posts : any;
  public newses : any;
  public currentNews : any;
  public users : any;
// !:Newses [ơ]
  public carsDisplay = false;
  public usersDisplay = false;
  public newsDisplay = false;
  constructor(private authService: AuthService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.authService.getAll_Posts().subscribe((data) =>{
      this.posts = data;
      console.log(this.posts)
    })
    this.authService.getAllNews().subscribe((data) =>{
      this.newses = data;
      console.log(this.newses)
    })
    this.authService.getUser().subscribe((data) =>{
      this.users = data;
      console.log(this.users)
    })
  }



  panelOpenState = false;
  onScroll() {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 100); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
  }

  refresh(): void {
    window.location.reload();
  }

  delPost(id) {
    this.authService.delRelatedPost(id).subscribe((message) => {
      console.log(message);
      this.snackBar.open(`${message.message}`,'', {duration: 2000})
      setTimeout(() => {
        this.refresh()
      },2000);

    });
  }

  delAllPosts (){
    this.authService.delleteAll_Post().subscribe((message) => {
      console.log(message);
      this.snackBar.open(`${message.message}`,'', {duration: 2000})
      setTimeout(() => {
        this.refresh()
      },2000);
    })
  }
  delNews(id) {
    this.authService.deleteNews(id).subscribe((message) => {
      // roles = this.tokenStorage.getUser().roles;
      console.log(message);
      this.snackBar.open(`${message.message}`,'', {duration: 2000})
      setTimeout(() => {
        this.refresh()
      },2000);
    });
  }
  delAllNews(){
    this.authService.deleteAll_News().subscribe((message) =>{
      console.log(message);
      this.snackBar.open(`${message.message}`,'', {duration: 2000})
      setTimeout(() => {
        this.refresh()
      },2000);
    })
  }


}
