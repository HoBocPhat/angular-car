import { Component, OnInit } from '@angular/core';
import carsData from 'src/assets/file/car.json';


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
// xóa

@Component({
  selector: 'app-carsale',
  templateUrl: './carsale.component.html',
  styleUrls: ['./carsale.component.css']
})
export class CarsaleComponent implements OnInit {
  imgSrc = 'assets/car_img/car.jpg'; //xóa
  cars: Cars[] = carsData; // lấy data của car để gọi trong html
  totalLength !: number;
  page: number = 1;

  constructor(

  ) {
   }

  ngOnInit(): void {
    this.totalLength = this.cars.length
    console.log(this.cars);
  }

}
