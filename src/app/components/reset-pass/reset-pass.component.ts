import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators  } from '@angular/forms';
import { AccountService } from '../services/account/account.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {
  resetForm !: FormGroup;
  token !: any;
  constructor(private acc: AccountService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      password: new FormControl (null, [Validators.required ]),
      confirmPassword: new FormControl (null, [Validators.required ])
    })
    this.token = this.route.snapshot.paramMap.get('token')
  }

  ConfirmedValidator() {
    return this.acc.mustMatch(this.resetForm.get('password')?.value,this.resetForm.get('confirmPassword')?.value);
  }
  getReset(token) {
    const newPass = this.resetForm.get('password')?.value
   this.authService.resetPass(token,newPass).subscribe(data=>{
     this.snackBar.open('Đổi password thành công.','',{duration: 2000})
     this.router.navigate(['/dangnhap'])
   }, (error) => {
     this.snackBar.open('Đổi password thất bại. Xin mời thử lại.','',{duration: 2000})
   });
  }
  onSubmit(){
    if(!this.ConfirmedValidator())
    { this.snackBar.open('Xác nhận password không đúng.','',{duration: 2000})
      return;}
    else{
      console.log(this.token)
      this.getReset(this.token)
    }
    // console.log(this.resetForm.value)
  }
}
