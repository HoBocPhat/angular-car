import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
// import { HttpClient} from '@angular/common/http';
// import { Router } from '@angular/router-deprecated';
// import {ActivatedRoute} from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginData } from 'src/app/models/loginData';
import { AuthenticationService } from '../services/authentication/authentication.service';
import {map} from "rxjs/operators";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl !: string;
  loginForm !: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  this.loginForm = new FormGroup({
    name: new FormControl(null,[
      Validators.required
    ]
    ),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ])
  })
}
  // gotoSignup() {
  //   this.router.navigate(["dangky"]);
  // }
  onSubmit() {
    console.log(this.loginForm.value);
    const loginData = new LoginData(this.loginForm.value.name, this.loginForm.value.password);
    this.authenticationService.authenticate(loginData);
    this.authenticationService.login(this.loginForm.value).pipe(
      map(token => this.router.navigate(['/trangchu']))
    ).subscribe();
  }
}
