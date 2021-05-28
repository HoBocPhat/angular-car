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

@Component({
  selector: 'app-post-saved',
  templateUrl: './post-saved.component.html',
  styleUrls: ['./post-saved.component.css']
})
export class PostSavedComponent implements OnInit {
  public cars: Cars[] = carsData;
  constructor() { }

  ngOnInit(): void {
  }

}
