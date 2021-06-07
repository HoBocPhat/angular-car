import { Component, OnInit } from '@angular/core';
import { AuthService} from "src/app/_services/auth.service";
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public user !: any;
  ngOnInit(): void {
    this.authService.getInfor().subscribe(data => {
      this.user = data;
      console.log(this.user['email']);
    }

    )
  }

}
