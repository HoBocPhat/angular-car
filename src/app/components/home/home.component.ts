import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signupSrc = 'assets/img/signup.png';
  loginSrc = 'assets/img/login.png';
  postSrc = 'assets/img/post.png';
  manageSrc = 'assets/img/manage.png';
  constructor() { }

  ngOnInit(): void {
  }

}
