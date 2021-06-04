import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-change-news',
  templateUrl: './change-news.component.html',
  styleUrls: ['./change-news.component.css']
})
export class ChangeNewsComponent implements OnInit {
  news : any;
  changeNews !: FormGroup;
  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.changeNews = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      author: new FormControl(),
      createdDate: new FormControl()
  })
  this.getNews(this.route.snapshot.paramMap.get('slug'))
}
  onSubmit(){
    console.log(this.changeNews.value)
  }
  getNews(slug) { this.authService.getDetailNews(slug).subscribe((data) => {
     this.news = data;
     console.log(this.news)
   })

}
}
