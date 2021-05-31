import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {AccountService} from "../services/account/account.service";
import {map} from "rxjs/operators";
import { AuthService} from "src/app/_services/auth.service";

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
    private http:HttpClient,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private acc: AccountService
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
        Validators.required,
        Validators.minLength(6)
      ]),
      passwordConfirm: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }
  ConfirmedValidator() {
    return this.acc.mustMatch(this.registerForm.get('password')?.value,this.registerForm.get('passwordConfirm')?.value);
  }
  onSubmit(){
    if(!this.ConfirmedValidator())
    {return;}
    else{
    const name = this.registerForm.get('name')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    console.log(this.registerForm.value);
    this.authService.register(name, email, password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['dangnhap']);
      }
    );
    }
  }

}
