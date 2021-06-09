import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  returnUrl !: string;
  forgotForm !: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authSercvice: AuthService
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.forgotForm = new FormGroup({
      email : new FormControl (null,[
        Validators.required,
        Validators.email
      ])
    })
  }
  onSubmit(){
    const email = this.forgotForm.get('email')?.value;
    this.authSercvice.forgotPass(email).subscribe((data)=>{
      console.log(data);
    });
  }

}
