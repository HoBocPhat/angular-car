import { Injectable } from '@angular/core';
import { PriceData } from 'src/app/models/recomPrice';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private recommendPrice = new PriceData(10000000000);
  public price = this.recommendPrice.getPrice();
  isAuthenticated = false;
  constructor() { }


}
