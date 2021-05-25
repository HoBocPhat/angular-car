import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor() { }
  mustMatch(password : string, confirmPassword : string ){
    return password === confirmPassword;
  }
}
