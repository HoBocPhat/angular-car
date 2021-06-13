import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
class ImageSnippet {
  constructor( public src: string, public file: File){}
}
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  addNewsForm !: FormGroup;
  url: string | ArrayBuffer | null | undefined;
  img !: File
  constructor(private authService: AuthService,
              private snackBar: MatSnackBar,
              private _router: Router) {
               }

  ngOnInit(): void {
    this.addNewsForm = new FormGroup({
      title: new FormControl(null),
      content: new FormControl(null),
      image : new FormControl(null)
    })
  }

  processFile(imageInput: any){
    const title = this.addNewsForm.get('title')?.value;
    const content = this.addNewsForm.get('content')?.value;

    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.authService.uploadImage(title,content,this.selectedFile.file).subscribe(
        (res) => { console.log(res);

        },
        (err) => { console.log(err);

        },)

    });
    console.log(this.selectedFile);
    reader.readAsDataURL(file);}

  selectedFile !: ImageSnippet;

  onSubmit(): void {
    const title = this.addNewsForm.get('title')?.value;
    const content = this.addNewsForm.get('content')?.value;
    const formdata = new FormData();
    formdata.append('img', this.img,this.img.name);
    const image = this.addNewsForm.get('image')?.value;
    this.authService.createNews(title,content, formdata).subscribe((message) => {
      console.log(message);
      this.snackBar.open("Thêm tin tức thành công !!!",'', {duration: 2000});
      this._router.navigate(['/admin']);
    }, (error) => {
      this.snackBar.open("Thay đổi thất bại.",'', {duration: 2000})
      this._router.navigate(['/admin']);
    })
  }

}
