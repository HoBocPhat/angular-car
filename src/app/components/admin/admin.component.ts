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
  image: any;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  cars: Cars[] = carsData;
  public carsDisplay = false;
  public usersDisplay = false;
  public newsDisplay = false;
  constructor() { }

  ngOnInit(): void {
  }
  carsClick(){
    if(this.carsDisplay === false){
    this.carsDisplay = true;}
    else {
      this.carsDisplay = false;
    }
  }
  usersClick(){
    if(this.usersDisplay === false){
      this.usersDisplay = true;}
      else {
        this.usersDisplay = false;
      }
  }
  newsClick(){
    if(this.newsDisplay === false){
      this.newsDisplay = true;}
      else {
        this.newsDisplay = false;
      }
  }
}
