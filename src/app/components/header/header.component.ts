import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { AuthenticationService } from '../services/authentication/authentication.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  signupSrc !: string;
  loginSrc !: string;
  postSrc !: string;
  manageSrc !: string;
  returnUrl !: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    public tokenService: TokenStorageService
  ) {}
  // name = this.tokenService.getUser().user.fullname;
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.signupSrc = 'assets/signup.png';
    this.loginSrc = 'assets/img/login.png';
    this.postSrc = 'assets/img/post.png';
    this.manageSrc = 'assets/img/manage.png';
    if(this.tokenService.getToken() != null)
    {
      this.authService.isLoggedIn = true;
    }
  }
  logout(){

    this.tokenService.signOut();
    this.authService.isLoggedIn = false;
    this.router.navigate(['/trangchu']);
  }

}
