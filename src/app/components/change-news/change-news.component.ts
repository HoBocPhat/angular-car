import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-change-news',
  templateUrl: './change-news.component.html',
  styleUrls: ['./change-news.component.css']
})
export class ChangeNewsComponent implements OnInit {
  news : any;
  changeNews !: FormGroup;
  constructor(private authService: AuthService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
    this.changeNews = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
    })
    this.getNews(this.route.snapshot.paramMap.get("slug"));
  }
  getNews(slug) { this.authService.getDetailNews(slug).subscribe((data) => {
    this.news = data;
    console.log(this.news);
  })
 }
  onSubmit(){
    console.log(this.changeNews.value);
    let title = this.changeNews.value.title;
    if (title === null){
      title = this.news.title;
    }

    let content = this.changeNews.value.content;
    if (content === null){
      content = this.news.content;
    }
    this.authService.upNews(this.news.id, title, content).subscribe((message) =>{
      console.log(message);
      this.snackBar.open(`${message.message}`,'', {duration: 2000});
      this.router.navigate(['/admin']);
    }, (error) => {
      this.snackBar.open("Thay đổi thất bại.",'', {duration: 2000})
      this.router.navigate(['/admin']);
    })
  }

}
