import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  addNewsForm !: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.addNewsForm = new FormGroup({
      title: new FormControl(null),
      content: new FormControl(null),
      image : new FormControl(null)
    })
    this.onSubmit();
  }
  onSubmit(): void {
    const title = this.addNewsForm.get('title')?.value;
    const content = this.addNewsForm.get('content')?.value;
    const image = this.addNewsForm.get('image')?.value;
    this.authService.createNews(title,content,image).subscribe(data => {
      console.log(data)
    })
  }

}
