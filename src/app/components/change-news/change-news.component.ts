import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-change-news',
  templateUrl: './change-news.component.html',
  styleUrls: ['./change-news.component.css']
})
export class ChangeNewsComponent implements OnInit {
  changeNews !: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.changeNews = new FormGroup({
      img: new FormControl
  })
}
  onSubmit(){
    // console.log(this.changeNews.value)
  }
}
