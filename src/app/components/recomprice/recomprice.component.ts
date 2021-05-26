import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PriceService } from 'src/app/components/services/recommend/price.service'; // lấy giá trị price từ model
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recomprice',
  templateUrl: './recomprice.component.html',
  styleUrls: ['./recomprice.component.css']
})
export class RecompriceComponent implements OnInit {
  recommendForm !: FormGroup;
  priceRe = this.priceService.price; // gán giá trị để placeholder
  constructor(
    private priceService: PriceService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RecompriceComponent>
  ) { }

  ngOnInit(): void {
    this.recommendForm = new FormGroup({
      price: new FormControl
    })
  }
  onSubmit(recommendForm){
    this.dialogRef.close(`${recommendForm.value.price}`); // đóng dialog khi nhấn submit
  }
}
