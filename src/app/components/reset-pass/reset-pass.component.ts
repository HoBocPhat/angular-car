import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators  } from '@angular/forms';
import { AccountService } from '../services/account/account.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
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
              private route: ActivatedRoute) { }

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
   this.authService.resetPass(token,newPass).subscribe(data=>{});
  }
  onSubmit(){
    if(!this.ConfirmedValidator())
    {return;}
    else{
      console.log(this.token)
      this.getReset(this.token)
    }
    // console.log(this.resetForm.value)
  }
}
