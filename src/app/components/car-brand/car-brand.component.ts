import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  selector: 'app-car-brand',
  templateUrl: './car-brand.component.html',
  styleUrls: ['./car-brand.component.css']
})
export class CarBrandComponent implements OnInit {
  public posts !: Posts[]; // lấy data của car để gọi trong html
  page: number = 1;
  filterTerm !: string;
  SortbyParam = '';
  SortDirection = 'asc';
  public brands : Brand[] = [];
  brand !: string;
  constructor( private authService: AuthService,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
  ) {
   }

  ngOnInit(): void {
    this.getPost(this.route.snapshot.paramMap.get('brand'))

    // this.getSortItem();
  }
  getPost(brand){
    this.authService.getCarByBrand(brand).subscribe((data)=>{
      this.posts = data;
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
  savePost(id) {
    this.authService.savePost(id).subscribe((message) => {
      console.log(message);
      this.snackBar.open(`${message.message}`,'', {duration: 2000})
    }, (error) => {
      this.snackBar.open("Lưu tin thất bại.",'', {duration: 2000})
    })
  }

}
