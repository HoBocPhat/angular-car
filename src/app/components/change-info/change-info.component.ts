import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';


@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {
  changeForm !: FormGroup;

  constructor( ) {


   }
  ngOnInit(): void {
    this.changeForm = new FormGroup({
      name : new FormControl(),
      email : new FormControl(),
      phone: new FormControl(),
      add: new FormControl()
    })

  }

  onSubmit() {
   console.log(this.changeForm.value);
  }
}
