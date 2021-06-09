import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private snackBar: MatSnackBar,
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
        this.authService.isLoggedIn = true;
        console.log(data);
        this.reloadPage();}
      , (error) => {
        this.snackBar.open('Đăng nhập thất bại :((((', '', {duration: 2000})
      }
    );

  }
  reloadPage(): void {
    this.router.navigate(['/trangchu']);
  }
}
