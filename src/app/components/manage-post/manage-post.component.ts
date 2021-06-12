import { Component, OnInit } from '@angular/core';
import carsData from 'src/assets/file/car.json';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Cars{
  id: number,
  brand: string,
  model: string,
  color:string,
  year: number,
  imp_exp: string,
  type: string,
  km: number,
  seat: number,
  price: number,
  area: string,
  name: string,
  phone: string,
  email: string,
  title: string,
  content: string,
  img: any;
}
@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.css']
})
export class ManagePostComponent implements OnInit {
  public cars: Cars[] = carsData;
  public posts : any;
  constructor(private authService: AuthService,
              private userService: UserService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.userService.getListPost().subscribe((data) =>{
      this.posts = data;
      console.log(this.posts)
    }

    )
  }
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
    }, (error) => {
      this.snackBar.open("Thay đổi thất bại.",'', {duration: 2000})
      setTimeout(() => {
        this.refresh()
      },1000);
    });
  }
  delAllPost (){
    this.authService.delRelatedAllPost().subscribe((message) => {
      console.log(message);
      this.snackBar.open(`${message.message}`,'', {duration: 2000})
      setTimeout(() => {
        this.refresh()
      },2000);
    }, (error) => {
      this.snackBar.open("Thay đổi thất bại.",'', {duration: 2000})
      setTimeout(() => {
        this.refresh()
      },1000);
    })
  }



}
