import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-saved',
  templateUrl: './post-saved.component.html',
  styleUrls: ['./post-saved.component.css']
})
export class PostSavedComponent implements OnInit {

  public posts !: any;
  returnUrl !: string;
  public isVisible: boolean = false;
  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authService.getSavedPost().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
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
  showAlert() : void {
    if (this.isVisible) {
      return;
    }
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
}
  removeSavePost(id) {
    this.authService.removeSavedPost(id).subscribe(data => {
      console.log(data);
      this.showAlert();
      this.refresh();
    })
  }
}
