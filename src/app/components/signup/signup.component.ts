import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {AccountService} from "../services/account/account.service";
import { AuthService} from "src/app/_services/auth.service";
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  returnUrl !: string;
  registerForm !: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private acc: AccountService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.registerForm = new FormGroup({
      name: new FormControl(null,[
        Validators.required
      ]
      ),
      email: new FormControl(null,[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required
      ]),
      passwordConfirm: new FormControl(null, [
        Validators.required
      ])
    })
  }
  ConfirmedValidator() {
    return this.acc.mustMatch(this.registerForm.get('password')?.value,this.registerForm.get('passwordConfirm')?.value);
  }
  onSubmit(){
    if(!this.ConfirmedValidator())
    { this.snackBar.open('Xác nhận password không đúng.','',{duration: 2000});
      return;}
    else{
    const name = this.registerForm.get('name')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    console.log(this.registerForm.value);
    this.authService.register(name, email, password).subscribe(
      data => {
        this.snackBar.open('Bạn đã đăng ký thành công.','',{duration: 2000});
        this.router.navigate(['dangnhap']);
      }, (error) => {
        console.log(error);
        this.snackBar.open('Đăng ký thất bại. Xin mời đăng ký lại.', '', {duration: 2000})
      }
    );
    }
  }

}
