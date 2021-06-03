import { Component, OnInit, ViewChild } from '@angular/core';
import carsData from 'src/assets/file/car.json';
// import { GridComponent, FilterService, FilterType } from '@syncfusion/ej2-angular-grids';
import { AuthService } from 'src/app/_services/auth.service';
interface Posts{
  id: string,
  carBrand: string,
  carType: string,
  carModel: string,
  carSeats: string,
  carColor: string,
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
// xóa

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
  constructor( private authService: AuthService

  ) {
   }

  ngOnInit(): void {
    this.authService.getAll_Posts().subscribe((data) =>{
      this.posts = data;
      console.log(data)
    })


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
}

