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

  onSubmit(): void {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.userToken);
        this.tokenStorage.saveUser(data);
        this.tokenStorage.getToken();

        this.roles = this.tokenStorage.getUser().roles;
        console.log(data)
        this.reloadPage();
      },
    );

  }
  reloadPage(): void {
    this.router.navigate(['/trangchu']);
  }
}
