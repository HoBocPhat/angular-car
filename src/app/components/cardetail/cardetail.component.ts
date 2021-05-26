import { Component, OnInit } from '@angular/core';
import carsData from 'src/assets/file/car.json'; //xóa nếu dùng http
import { Gallery, GalleryItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

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
  image: any;
}
// xóa
@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  cars: Cars[] = carsData; // xóa
  imgCollection: Cars['image'] = carsData //xóa
  items !: GalleryItem[];

  imageData = data;//tất cả ảnh của một xe cái này được gọi ở html
  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit(): void {
  const lightboxRef = this.gallery.ref('lightbox');
  lightboxRef.load(this.items);
  }
}
const data = [
  {
    srcUrl: 'assets/car_img/car.jpg',
    previewUrl:  'assets/car_img/car.jpg'
  },
  {
    srcUrl: 'assets/car_img/car.jpg',
    previewUrl: 'assets/car_img/car.jpg'
  },
  {
    srcUrl: 'assets/car_img/car.jpg',
    previewUrl: 'assets/car_img/car.jpg'
  },
  {
    srcUrl: 'assets/car_img/car.jpg',
    previewUrl: 'assets/car_img/car.jpg'
  }
]; // xóa cái này để lấy data thử th
