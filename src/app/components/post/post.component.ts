import { Component, OnInit,Input } from '@angular/core';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatDialog } from '@angular/material/dialog';
import { RecompriceComponent } from '../recomprice/recomprice.component';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import {PostService} from '../services/post/post.service'
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  prosList: Array<any> = [
    { name: 'Đồng Tháp', dists: ['TP Cao Lãnh', 'TP Sa Đéc', 'TP Hồng Ngự', 'Huyện Tân Hồng', 'Huyện Tam Nông', 'Huyện Tháp Mười', 'Huyện Cao Lãnh', 'Huyện Thanh Bình', 'Huyện Lấp Vò', 'Huyện Lai Vung', 'Huyện Châu Thành'] },
    { name: 'TP.HCM', dists: ['Quận 1', 'Quận 12', 'Quận Gò Vấp', 'Quận Bình Thạnh', 'Quận Tân Phú', 'Quận Phú Nhuận', 'Quận 3', 'Quận 10', 'Quận 11', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 8', 'Quận Bình Tân', 'Quận 7', 'Huyện Củ Chi', 'Huyện Hóc Môn', 'Huyện Bình Chánh', 'Huyện Nhà Bè', 'Huyện Cần Giờ'] },
    { name: 'TP.Hà Nội', dists: ['Quận Ba Đình', 'Quận Hoàn Kiếm', 'Quận Tây Hồ', 'Quận Long Biên', 'Quận Cầu Giấy', 'Quận Đống Đa', 'Quận Hai Bà Trưng', 'Quận Hoàng Mai', 'Quận Thanh Xuân', 'Huyện Sóc Sơn', 'Huyện Đông Anh', 'Huyện Gia Lâm', 'Quận Nam Từ Liêm', 'Huyện Thanh Trì', 'Quận Bắc Từ Liêm', 'Huyện Mê Linh', 'Quận Hà Đông', 'Thị xã Sơn Tây', 'Huyện Ba Vì', 'Huyện Phúc Thọ', 'Huyện Đan Phượng', 'Huyện Hoài Đức', 'Huyện Quốc Oai', 'Huyện Thạch Thất', 'Huyện Chương Mỹ', 'Huyện Thanh Oai', 'Huyện Thường Tín', 'Huyện Phú Xuyên', 'Huyện Ứng Hòa', 'Huyện Mỹ Đức'] },
    { name: 'TP.Đà Nẵng', dists: ['Quận Linh Chiểu', 'Quận Thanh Khê', 'Quận Hải Châu', 'Quận Sơn Trà', 'Quận Ngũ Hành Sơn', 'Quận Cẩm Lệ', 'Huyện Hòa Vang'] },
    { name: 'Gia Lai', dists: ['TP Pleiku', 'Thị xã An Khê', 'Thị xã Ayun Pa', 'Huyện KBang', 'Huyện Đăk Đoa', 'Huyện Chư Păh', 'Huyện La Grai', 'Huyện Mang Yang', 'Huyện Kông Chro', 'Huyện Đức Cơ', 'Huyện Chư Prông', 'Huyện Chư Sê', 'Huyện Đăk Pơ', 'Huyện la Pa','Huyện Krông Pa', 'Huyện Phú Thiện', 'Huyện Chư Pưh'] },
    { name: 'TP. Hải Phòng', dists: ['Quận Hồng Bàng', 'Quận Ngô Quyền', 'Quận Lê Chân', 'Quận Hải An', 'Quận Đồ Sơn', 'Quận Dương Kinh', 'Huyện Thủy Nguyên', 'Huyện An Dương', 'Huyện An Lão', 'Huyện Kiến Thụy', 'Huyện Tiên Lãng', 'Huyện Vĩng Bảo', 'Huyện Cát Hải', 'Quận Bình Tân'] },
    { name: 'TP Thủ Đức', dists: ['Quận Thủ Đức', 'Quận 9', 'Quận 2']},
    { name: 'Nghệ An', dists: ['TP Vinh', 'Thị xã Cửa Lò', 'Thị xã Thái Hòa', 'Huyện Quế Phong', 'Huyện Quỳ Châu', 'Huyện Kỳ Sơn', 'Huyện Tương Dương', 'Huyện Nghĩa Đàn', 'Huyện Quỳ Hợp', 'Huyện Quỳnh Lưu', 'Huyện Con Cuông', 'Huyện Tân Kỳ', 'Huyện Anh Sơn', 'Huyện Diễn Châu', 'Huyện Yên Thành', 'Huyện Đô Lương', 'Huyện Thanh Chương','Huyện Nghi Lộc', 'Huyện Nam Đàn', 'Huyện Hưng Nguyên', 'Thị xã Hoàng Mai'] },
    { name: 'Quảng Nam', dists: ['TP Tam Kỳ', 'TP Hội An', 'Huyện Tây Giang', 'Huyện Đại Lộc', 'Thị xã Điện Bàn', 'Huyện Duy Xuyên', 'Huyện Quế Sơn', 'Huyện Nam Giang', 'Huyện Phước Sơn', 'Huyện Hiệp Đức', 'Huyện Thăng Bình', 'Huyện Tiên Phước', 'Huyện Bắc Trà My', 'Huyện Nam Trà My', 'Huyện Núi Thành', 'Huyện Phú Ninh', 'Huyện Nông Sơn'] },
    { name: 'Bình Định', dists: ['TP Quy Nhơn', 'Huyện An Lão', 'Huyện Hoài Nhơn', 'Huyện Hoài Ân', 'Huyện Phù Mỹ', 'Huyện Vĩnh Thạnh', 'Huyện Tây Sơn', 'Huyện Phù Cát', 'Thị xã An Nhơn', 'Huyện Tuy Phước', 'Huyện Vân Canh'] },
    { name: 'Ninh Thuận', dists: ['TP Phan Rang', 'Huyện Bác Ái', 'Huyện Ninh Sơn', 'Huyện Ninh Hải', 'Huyện Thuận Bắc', 'Huyện Thuận Nam'] },
    { name: 'Lâm Đồng', dists: ['TP Đà Lạt', 'TP Bảo Lộc', 'Huyện Đam Rông', 'Huyện Lạc Dương', 'Huyện Lâm Hà', 'Huyện Đơn Dương', 'Huyện Đức Trọng', 'Huyện Di Linh', 'Huyện Bảo Lâm', 'Huyện Đạ Huoai', 'Huyện Đạ Tẻh', 'Huyện Cát Tiên'] },
    { name: 'Tiền Giang', dists: ['TP Mỹ Tho', 'Thị xã Gò Công', 'Thị xã Cai Lậy', 'Huyện Tân Phước', 'Huyện Cái Bè', 'Huyện Cai Lậy', 'Huyện Châu Thành', 'Huyện Chợ Gạo', 'Huyện Gò Công Tây', 'Huyện Gò Công Đông', 'Huyện Tân Phú'] },
    { name: 'Vĩnh Long', dists: ['TP Vĩnh Long', 'Huyện Long Hồ', 'Huyện Mang Thít', 'Huyện Vũng Liêm', 'Huyện Tam Bình', 'Thị xã Bình Minh', 'Huyện Trà Ôn', 'Huyện Bình Tân'] },
    { name: 'An Giang', dists: ['TP Long Xuyên', 'TP Châu Đốc', 'Huyện An Phú', 'Thị xã Tân Châu', 'Huyện Phú Tân', 'Huyện Châu Phú', 'Huyện Tịnh Biên', 'Huyện Tri Tôn', 'Huyện Châu Thành', 'Huyện Chợ Mới', 'Huyện Thoại Sơn'] },
    { name: 'TP Cần Thơ', dists: ['Quận Ninh Kiều', 'Quận Ô Môn', 'Quận Bình Thủy', 'Quận Cái Răng', 'Quận Thốt Nốt', 'Huyện Vĩnh Thạnh', 'Huyện Cờ Đỏ', 'Huyện Phong Điền', 'Huyện Thới Lai'] },
    { name: 'Bạc Liêu', dists: ['TP Bạc Liêu', 'Huyện Hồng Dân', 'Huyện Phước Long', 'Huyện Vĩnh Lợi', 'Thị xã Giá Rai', 'Huyện Đông Hải', 'Huyện Hòa Bình', 'Huyện Thanh Bình'] },
  ];
  dists !: Array<any>
  postForm !: FormGroup;
  count !: any;
  @Input() price !: string;
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      phone: new FormControl(null,[
        Validators.required
      ]),
      email: new FormControl(null,[
        Validators.required,
        Validators.email
      ]
      )
    })

    // this.http.get("src/assets/data/post.json").subscribe(
    //   data =>{
    //     console.log(data);
    //     this.posts = data;
    //   }
    // )
  }
  onRecommend() :void {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body;
    // dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.dialog.open(RecompriceComponent, dialogConfig);
  }
  onSubmit(){
    console.log(this.postForm.value)
  }
  changePros(count) {
    this.dists = this.prosList.find(con => con.name == count).dists;
  }
}
