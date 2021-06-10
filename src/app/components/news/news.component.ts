import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public newses : any;
  totalLength !: number;
  page: number = 1;
  public img_title ='https://tinbanxe.vn/uploads/car/mceu_73714749411622174257634.jpg';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAllNews().subscribe((data) => {
      this.newses = data;
      console.log(this.newses)
    })
  }

}
