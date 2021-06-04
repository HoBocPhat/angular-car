import { Component, OnInit } from '@angular/core';
import carsData from 'src/assets/file/car.json';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
interface Posts{
  id: string,
  carBrand: string,
  carOdometer: number,
  carPrice: number,
  contactDistrict: string,
  contactProvince: string,
  createdAt: string,
  postContent: string,
  contactPhone: string,
  postedBy: string,
  slug: string,
  imgPost: any
}
interface Newses{
  content: string,
  createdAt: string,
  id: string,
  postedBy: string
  slug: string
  title: string
  updatedAt: string
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public posts !: Posts[];
  public newses !: Newses[];
  public currentNews !: Newses [];
  public carsDisplay = false;
  public usersDisplay = false;
  public newsDisplay = false;
  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.authService.getAll_Posts().subscribe((data) =>{
      this.posts = data;
      console.log(this.posts)
    })
    this.authService.getAllNews().subscribe((data) =>{
      this.newses = data;
      console.log(this.newses)
    })

  }


  panelOpenState = false;
  onScroll() {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 100); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
  }
  delAllPosts() {
    this.authService.delleteAll_Post();
  }
  delNews(id) {
    this.authService.deleteNews(id).subscribe((response) => {
      console.log(response)
    });
  }
}
