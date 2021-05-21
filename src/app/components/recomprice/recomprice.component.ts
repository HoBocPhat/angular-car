import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PriceService } from 'src/app/components/services/recommend/price.service';

@Component({
  selector: 'app-recomprice',
  templateUrl: './recomprice.component.html',
  styleUrls: ['./recomprice.component.css']
})
export class RecompriceComponent implements OnInit {
  price = this.priceService.price
  priceInput !: number;
  recommendForm !: FormGroup;
  constructor(
    private priceService: PriceService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.recommendForm.value['price']);
  }
}
