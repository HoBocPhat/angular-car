import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder } from '@angular/forms';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {
  changeForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private acc: AccountService) {
    // this.changeForm = this.formBuilder.group({
    //   password: [''],
    //   confirmPassword: ['']
    // }, { validator: this.ConfirmedValidator('password','confirmPassword') })
    // let formControls = {
    //   password: new FormControl,
    //   confirmPassword: new FormControl

    // }

    // this.changeForm = this.formBuilder.group(formControls)

   }
  ngOnInit(): void {
    this.changeForm = new FormGroup({
      password: new FormControl,
      confirmPassword: new FormControl,
    })

  }
  ConfirmedValidator() {
    return this.acc.mustMatch(this.changeForm.get('password')?.value,this.changeForm.get('confirmPassword')?.value);
  }
  onSubmit() {
   console.log(this.acc.mustMatch(this.changeForm.get('password')?.value,this.changeForm.get('confirmPassword')?.value))
   console.log(this.changeForm.value)
  }
}
