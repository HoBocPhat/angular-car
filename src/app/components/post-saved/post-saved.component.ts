import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-saved',
  templateUrl: './post-saved.component.html',
  styleUrls: ['./post-saved.component.css']
})
export class PostSavedComponent implements OnInit {

  public posts : any;
  constructor(private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authService.getSavedPost().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    })
    this.getPosts(this.route.snapshot.paramMap.get("slug"));
  }
  getPosts(slug) { this.authService.getDetailPost(slug).subscribe((data) => {
    this.posts = data;
    console.log(this.posts);
  })
 }

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
  refresh(): void {
    window.location.reload();

}

  removeSavePost(id) {
    this.authService.removeSavedPost(id).subscribe((message) => {
      console.log(message);
      this.snackBar.open("Xóa tin đã lưu thành công",'', {duration: 2000})
      setTimeout(() => {
        this.refresh()
      },1000);
    }, (error) => {
      this.snackBar.open("Thay đổi thất bại.",'', {duration: 2000})
      setTimeout(() => {
        this.refresh()
      },1000);
    })
  }
}
