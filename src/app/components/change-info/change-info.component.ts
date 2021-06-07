import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {
  changeForm !: FormGroup;
  user !: any;
  constructor(private authService: AuthService ) {


   }
  ngOnInit(): void {
    this.changeForm = new FormGroup({
      fullname : new FormControl(),
      phone : new FormControl(),
      address: new FormControl()
    })
    this.authService.getInfor().subscribe(data => {
      this.user=data
    })

  }

  onSubmit() {
    let fullname = this.changeForm.get('fullname')?.value;
    if(fullname === null){fullname = this.user['fullname']};

    let phone = this.changeForm.get('phone')?.value;
    if(phone === null){phone = this.user['phone']};

    let address = this.changeForm.get('address')?.value;
    if(address === null){address = this.user['address']};

    this.authService.changeInfo(fullname, phone, address).subscribe(data => {
      console.log(data);
    })
  }
}
