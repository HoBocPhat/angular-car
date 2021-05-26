import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators  } from '@angular/forms';
import { AccountService } from '../services/account/account.service';// so sánh pass vs confirm pass

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  passForm !: FormGroup;
  constructor(private acc: AccountService) { }

  ngOnInit(): void {
    this.passForm = new FormGroup({
      oldPassword : new FormControl(null, [Validators.required ]),
      password: new FormControl (null, [Validators.required ]),
      confirmPassword: new FormControl (null, [Validators.required ])
    })
  }
  ConfirmedValidator() {
    return this.acc.mustMatch(this.passForm.get('password')?.value,this.passForm.get('confirmPassword')?.value);
  }
  onSubmit(){
    if(!this.ConfirmedValidator())
    {return;} // kh giống thì kh làm gì cả
    console.log(this.passForm.value)
  }
}
