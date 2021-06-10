import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators  } from '@angular/forms';
import { AccountService } from '../services/account/account.service';// so sánh pass vs confirm pass
import { AuthService } from 'src/app/_services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  passForm !: FormGroup;
  public user !: any;
  constructor(private acc: AccountService,
              private authService: AuthService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.passForm = new FormGroup({
      oldPassword : new FormControl(null, [Validators.required ]),
      password: new FormControl (null, [Validators.required ]),
      confirmPassword: new FormControl (null, [Validators.required ])
    });
    this.authService.getInfor().subscribe(data => {
      this.user = data;
      console.log(this.user);
    }

    )
  }
  ConfirmedValidator() {
    return this.acc.mustMatch(this.passForm.get('password')?.value,this.passForm.get('confirmPassword')?.value);
  }
  onSubmit(id){
    if(!this.ConfirmedValidator())
    {this.snackBar.open("Không đúng xác nhận lại password",'',{duration: 2000} );
      return;} // kh giống thì kh làm gì cả
    else {
      let oldPass = this.passForm.get('oldPassword')?.value;
      let newPass = this.passForm.get('password')?.value;
      this.authService.changePass(id, oldPass,newPass).subscribe((data)=>{
        this.snackBar.open('Đổi password thành công.','',{duration: 2000});
        this.router.navigate(['/trangchu'])
      }, (error) => {
        this.snackBar.open('Đổi password không thành công.','',{duration: 2000})
      })
    }

  }
}
