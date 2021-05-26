import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {AuthenticationService} from "../services/authentication/authentication.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  returnUrl !: string;
  registerForm !: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http:HttpClient,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.registerForm = new FormGroup({
      name: new FormControl(null,[
        Validators.required
      ]
      ),
      username: new FormControl(null,[
        Validators.required
      ]),
      email: new FormControl(null,[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      passwordConfirm: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }
  onSubmit(){
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).pipe( // cái register trong authService để post api ch làm đk
      map(user => this.router.navigate(['/dangnhap']))
    ).subscribe()
  }

}
