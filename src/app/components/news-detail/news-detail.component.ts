import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  constructor() { }
  public title = 'Danh sách xe mới 2022 của Hyundai bổ sung thêm Ioniq 6 và Ioniq 7';
  public author = 'Phú Qúy';
  public time = '20/05/2021';
  public img_title ='https://img1.oto.com.vn/2021/05/27/8RgE0bMU/danh-sach-xe-moi-2022-cua-hyundai-bo-sung-them-ion-9783.jpg';
  public summary = 'Ngoài Hyundai Ioniq 6 và Ioniq 7, hãng xe Hàn còn một số mẫu xe khác dự kiến ra mắt vào năm 2022.';
  public img_content = 'https://img1.oto.com.vn/2021/05/27/8RgE0bMU/danh-sach-xe-moi-2022-cua-hyundai-bo-sung-them-ion-047b.jpg';
  ngOnInit(): void {
  }

}
