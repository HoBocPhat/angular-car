import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  signupSrc = 'assets/img/signup.png';
  loginSrc = 'assets/img/login.png';
  postSrc = 'assets/img/post.png';
  manageSrc = 'assets/img/manage.png';
  returnUrl !: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthenticationService,
  ) {}
  name = this.authenticationService.name;
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  logout(){
    this.authenticationService.logout();
  }

}
