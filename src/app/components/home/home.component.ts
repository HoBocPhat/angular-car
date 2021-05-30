import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public logo_img_src = 'data:image/png;base64,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'
  public slogan = 'Slogan'
  constructor (private fb: FormBuilder) {

  }
  public onSubmit() {}

  public brands = ['Alfa-Romeo', 'Audi', 'Bentley', 'BMW', 'Cadillac', 'Chevrolet', 'Ferrari', 'Ford', 'Honda',
                  'Hummer', 'Huyndai', 'Infiniti', 'Isuzu', 'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Landrover',
                  'Lexus', 'Maserati', 'Mazda', 'Mercedes-Benz', 'Mistubishi', 'Nissan', 'Peugeot', 'Porsche',
                  'Roll-Royce', 'Suzuki', 'Sym', 'Tesla', 'Thaco', 'Toyota', 'Vinfast', 'Volkswagen', 'Volvo', 'Hãng khác'];

  public colors = ['Bạc', 'Cam', 'Cát', 'Ghi', 'Hồng', 'Kem', 'Nâu', 'Trắng', 'Vàng', 'Xanh', 'Xám', 'Đen',
                    'Đỏ', 'Đồng', 'Nhiều màu', 'Màu khác', 'Warn']

  public years = ['trước 1990', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
                  '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
                  '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', ]
  //Form
  CarForm = this.fb.group({
    brand: {value:'', disabled: false },
    version: {value:'', disabled: true },
    max_price:[''],
    min_price:[''],
    color: [''],
    year: [''],
    km: [''],
    seat: [''],
    new: [''],
    old: [''],
    import: [''],
    export: [''],
  });

  //Rang buoc Brand and Version
  ngOnInit(){
    this.CarForm.get('brand')?.valueChanges.subscribe( selectedBrand =>
      {
        if (selectedBrand != '')
        {
          this.CarForm.get('version')?.enable();
        }
        else {
          this.CarForm.get('version')?.disable();
        }
      }
    )
  }

  //Reset
  public ResetName() {
    this.CarForm.setValue({ brand:'', version:'', max_price:'', min_price:'', color:'', year:'', km:'',
                            seat:'', new:'', old:'', import:'', export:''});
  }

  MoreInformation = true;
  OnButtonClick(){
    this.MoreInformation = !this.MoreInformation;
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
    previewUrl:  'assets/car_img/car.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
  }
];
