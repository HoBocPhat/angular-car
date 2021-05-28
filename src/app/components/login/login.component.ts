import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
// import { HttpClient} from '@angular/common/http';
// import { Router } from '@angular/router-deprecated';
// import {ActivatedRoute} from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginData } from 'src/app/models/loginData';
import { AuthenticationService } from '../services/authentication/authentication.service';
import {map} from "rxjs/operators";
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl !: string;
  loginForm !: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  // errorMessage = '';
  roles: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
  if (this.tokenStorage.getToken()) {
    this.isLoggedIn = true;
    this.roles = this.tokenStorage.getUser().roles;

  }
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  this.loginForm = new FormGroup({
    email: new FormControl(null,[
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
  // onSubmit() {
  //   console.log(this.loginForm.value);
  //   const loginData = new LoginData(this.loginForm.value.name, this.loginForm.value.password);
  //   this.authenticationService.authenticate(loginData);
  //   this.authenticationService.login(this.loginForm.value).pipe(
  //     map(token => this.router.navigate(['/trangchu']))
  //   ).subscribe();
  // }
  onSubmit(): void {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value
    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.userToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      // err => {
      //   this.errorMessage = err.error.message;
      //   this.isLoginFailed = true;
      // }
    //   const loginData = new LoginData(this.loginForm.value.name, this.loginForm.value.password);
    //   this.authenticationService.authenticate(loginData);
    //   this.authenticationService.login(this.loginForm.value).pipe(
    //   map(token => this.router.navigate(['/trangchu']))
    // ).subscribe();
    );

  }
  reloadPage(): void {
    this.router.navigate(['trangchu']);
  }
}
