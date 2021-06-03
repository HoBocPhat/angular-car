import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators  } from '@angular/forms';
import { AccountService } from '../services/account/account.service';
@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {
  resetForm !: FormGroup;
  constructor(private acc: AccountService) { }

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      password: new FormControl (null, [Validators.required ]),
      confirmPassword: new FormControl (null, [Validators.required ])
    })
  }
  ConfirmedValidator() {
    return this.acc.mustMatch(this.resetForm.get('password')?.value,this.resetForm.get('confirmPassword')?.value);
  }
  onSubmit(){
    if(!this.ConfirmedValidator())
    {return;} // kh giống thì kh làm gì cả
    console.log(this.resetForm.value)
  }
}
