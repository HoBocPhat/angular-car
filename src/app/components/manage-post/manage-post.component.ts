import { Component, OnInit } from '@angular/core';
import carsData from 'src/assets/file/car.json';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
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
  public posts = [];
  constructor(private authService: AuthService,
              private userService: UserService) { }

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
  // this.dataService.sendGetRequest().subscribe((data: any[])=>{
  //   console.log(data);
  //   this.products = data;
  // })
}
