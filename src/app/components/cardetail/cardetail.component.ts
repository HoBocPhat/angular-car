import { Component, OnInit } from '@angular/core';
import carsData from 'src/assets/file/car.json'; //xóa nếu dùng http
import { Gallery, GalleryItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
interface Post{
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
  postedBy: any,
  slug: string,
  postImage: any,
  title: string,
}
interface imageData {
  srcUrl: string
}
// xóa
@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']

})
export class CardetailComponent implements OnInit {
  public post !: Post; // xóa
  // imgCollection:  //xóa
  imgCollection = data;
  images : imageData [] = [];
  items !: GalleryItem[];
  // image !: imageData ;//tất cả ảnh của một xe cái này được gọi ở html
  constructor(public gallery: Gallery, public lightbox: Lightbox,
                private authService: AuthService,
                private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit(): void {
    this.getPost(this.route.snapshot.paramMap.get('slug'))
  const lightboxRef = this.gallery.ref('lightbox');
  lightboxRef.load(this.items);
  }
  getPost(slug) { this.authService.getDetailPost(slug).subscribe((data) => {
      this.post=data;
       console.log(this.post[0].postImage.length);
       this.getImage();
     })

  }
  getImage() {
    for (var i = 0; i < this.post[0].postImage.length; i++)
    {
      var image : imageData = {srcUrl: this.post[0].postImage[i].image }
      this.images.push(image)
    }
    console.log(this.images)
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

const data = [
  {
    srcUrl: 'assets/car_img/car.jpg',
    // previewUrl:  'assets/car_img/car.jpg'
  },
  {
    srcUrl: 'assets/car_img/car.jpg',
    // previewUrl: 'assets/car_img/car.jpg'
  },
  {
    srcUrl: 'assets/car_img/car.jpg',
    // previewUrl: 'assets/car_img/car.jpg'
  },
  {
    srcUrl: 'assets/car_img/car.jpg',
    // previewUrl: 'assets/car_img/car.jpg'
  },
  {
    srcUrl: 'assets/car_img/car.jpg',
    // previewUrl: 'assets/car_img/car.jpg'
  }
]; // xóa cái này để lấy data thử th
