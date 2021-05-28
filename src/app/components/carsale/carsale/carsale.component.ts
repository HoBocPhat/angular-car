import { Component, OnInit, ViewChild } from '@angular/core';
import carsData from 'src/assets/file/car.json';
// import { GridComponent, FilterService, FilterType } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import {PageSettingsModel, SortSettingsModel, FilterService } from '@syncfusion/ej2-angular-treegrid';
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
  styleUrls: ['./carsale.component.css'],
  providers: [FilterService]
})
export class CarsaleComponent implements OnInit {
  imgSrc = 'assets/car_img/car.jpg'; //xóa
  public cars: Cars[] = carsData; // lấy data của car để gọi trong html
  totalLength !: number;
  page: number = 1;
  public sortSettings !: SortSettingsModel;
  public pageSettings !: PageSettingsModel;
  constructor(

  ) {
   }

  ngOnInit(): void {
    this.totalLength = this.cars.length
    console.log(this.cars);
    this.sortSettings = {
      columns : [
        {field: 'ID', direction: 'Ascending'},
        {field: 'Name', direction: 'Descending'}
      ]
    };
    this.pageSettings = {pageSize: 9};
  }

}

