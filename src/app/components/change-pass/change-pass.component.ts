import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators  } from '@angular/forms';
import { AccountService } from '../services/account/account.service';// so sánh pass vs confirm pass
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  passForm !: FormGroup;
  constructor(private acc: AccountService,
              private authService: AuthService) { }

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
    {console.log("không đúng xác nhận password");
      return;} // kh giống thì kh làm gì cả
    else {
      const oldPass = this.passForm.get('oldPassword')?.value;
      const newPass = this.passForm.get('password')?.value;
      // this.authService.changePass(oldPass,newPass).subscribe(data=>{console.log(data)});
      console.log(oldPass,newPass);
    }

  }
}
