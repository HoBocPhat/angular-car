import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PriceService } from 'src/app/components/services/recommend/price.service';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recomprice',
  templateUrl: './recomprice.component.html',
  styleUrls: ['./recomprice.component.css']
})
export class RecompriceComponent implements OnInit {
  recommendForm !: FormGroup;
  priceRe = this.priceService.price;
  constructor(
    private priceService: PriceService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RecompriceComponent>
  ) { }

  ngOnInit(): void {
    this.recommendForm = this.formBuilder.group({
      price:''
    })
  }
  onSubmit(recommendForm){
    this.dialogRef.close(`${recommendForm.value.price}`);
  }
}
