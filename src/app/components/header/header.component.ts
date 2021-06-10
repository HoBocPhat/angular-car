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
  public name !: string;
  public brand_luxury = ["Bentley", "Rolls-Royce", "Mercedes-Benz", "Ferrari", "BMW"];
  public brand_mass = [ "Toyota", "Honda", "Chevrolet", "Ford", "Huyndai" , "Mazda"];
  public brand_sport = ["Jeep", "Porches", "Lamborghini", "Maserati", "Land Rover"];
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
      this.authService.getInfor().subscribe(data => {
        // window.location.reload();
        this.name = data['fullname'];
        // console.log(data['fullname'])
      });
    }
  }
  logout(){

    this.tokenService.signOut();
    this.authService.isLoggedIn = false;
    this.router.navigate(['/trangchu']);
  }

}
