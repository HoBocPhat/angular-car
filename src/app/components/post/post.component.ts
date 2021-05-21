import { Component, OnInit,Input } from '@angular/core';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatDialog } from '@angular/material/dialog';
import { RecompriceComponent } from '../recomprice/recomprice.component';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import {PostService} from '../services/post/post.service'
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postForm !: FormGroup;
  @Input() price !: string;
  constructor(
    private dialog: MatDialog,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      phone: new FormControl(null,[
        Validators.required
      ]),
      email: new FormControl(null,[
        Validators.required,
        Validators.email
      ]
      )
    })

    // this.http.get("src/assets/data/post.json").subscribe(
    //   data =>{
    //     console.log(data);
    //     this.posts = data;
    //   }
    // )
  }
  onRecommend() :void {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body;
    // dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.dialog.open(RecompriceComponent, dialogConfig);
  }
  onSubmit(){
    console.log(this.postForm.value)
  }
}
