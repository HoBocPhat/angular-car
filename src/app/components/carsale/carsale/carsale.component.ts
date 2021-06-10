import { Component, OnInit, ViewChild } from '@angular/core';
import carsData from 'src/assets/file/car.json';
// import { GridComponent, FilterService, FilterType } from '@syncfusion/ej2-angular-grids';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {MatSnackBar} from '@angular/material/snack-bar';

interface Posts{
  id: string,
  carBrand: string,
  carType: string,
  carModel: string,
  carSeats: string,
  carColor: string,
  carFueltype: string,
  carYear: string,
  carOdometer: number,
  carPrice: number,
  contactDistrict: string,
  contactProvince: string,
  createdAt: string,
  postContent: string,
  contactPhone: string,
  postedBy: string,
  slug: string,
  postPics: any,
}
interface Brand{
  brand: string
}
interface Price{
  price: string
}
interface Km {
  km: string
}
@Component({
  selector: 'app-carsale',
  templateUrl: './carsale.component.html',
  styleUrls: ['./carsale.component.css'],
})
export class CarsaleComponent implements OnInit {
  imgSrc = 'assets/car_img/car.jpg'; //xóa
  public posts !: Posts[]; // lấy data của car để gọi trong html
  page: number = 1;
  filterTerm !: string;
  SortbyParam = '';
  SortDirection = 'asc';
  token !: any;
  public brands : Brand[] = [];
  brand !: Array<string>;
  public message !: any;
  constructor( private authService: AuthService,
              private tokenService: TokenStorageService,
              private snackBar: MatSnackBar

  ) {
   }

  ngOnInit(): void {
    this.authService.getAll_Posts().subscribe((data) =>{
      this.posts = data;
      console.log(data);
      for (var i = 0; i < this.posts.length; i++)
      {
        // var brand  : Brand = { brand: this.posts[i].carBrand};

        // this.brands.push(brand);
        let b = this.posts[i].carBrand;
        this.brand.push(b);
      }
      console.log(this.brand)
        // console.log(this.brands);
    })
    console.log(this.tokenService.getToken())
    this.token = this.tokenService.getToken();
    // this.getSortItem();
  }
  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
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
  savePost(id) {
    this.authService.savePost(id).subscribe((message) => {
      console.log(message)
      this.snackBar.open(`${message.message}`, '', {duration: 2000})
    })
  }
//   getSortItem(){
//     for (var i = 0; i < this.posts.length; i++) {
//       var brand : Brand = { brand: this.posts[i].carBrand }
//       this.brands.push(brand)
//     }
//     console.log(this.brands);
// }
}

