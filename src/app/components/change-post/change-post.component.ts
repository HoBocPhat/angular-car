import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/_services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-post',
  templateUrl: './change-post.component.html',
  styleUrls: ['./change-post.component.css']
})
export class ChangePostComponent implements OnInit {
  prosList: Array<any> = [
    { name: 'TP Hà Nội', dists: ['Quận Ba Đình', 'Quận Hoàn Kiếm', 'Quận Tây Hồ', 'Quận Long Biên', 'Quận Cầu Giấy', 'Quận Đống Đa', 'Quận Hai Bà Trưng', 'Quận Hoàng Mai', 'Quận Thanh Xuân', 'Huyện Sóc Sơn', 'Huyện Đông Anh', 'Huyện Gia Lâm', 'Quận Nam Từ Liêm', 'Huyện Thanh Trì', 'Quận Bắc Từ Liêm', 'Huyện Mê Linh', 'Quận Hà Đông', 'Thị xã Sơn Tây', 'Huyện Ba Vì', 'Huyện Phúc Thọ', 'Huyện Đan Phượng', 'Huyện Hoài Đức', 'Huyện Quốc Oai', 'Huyện Thạch Thất', 'Huyện Chương Mỹ', 'Huyện Thanh Oai', 'Huyện Thường Tín', 'Huyện Phú Xuyên', 'Huyện Ứng Hòa', 'Huyện Mỹ Đức'] },
    { name: 'Hà Giang', dists: ['Huyện Bắc Mê', 'Huyện Bắc Quang', 'Huyện Hoàng Su Phì', 'Huyện Đồng Văn', 'Huyện Mèo Vạc', 'Huyện Quản Bạ', 'Huyện Quang Bình', 'Huyện Vị Xuyên', 'Huyện Xin Mần', 'Huyện Yên Minh'] },
    { name: 'Cao Bằng', dists: ['Huyện Hòa An', 'Huyện Thạch An', 'Huyện Nguyên Bình', 'Huyện Bảo Lạc', 'Huyện Bảo Lâm', 'Huyện Hạ Lang', 'Huyện Hà Quản', 'Huyện Trùng Khánh', 'Huyện Quảng Hòa', 'Thành phố Cao Bằng'] },
    { name: 'Bắc Kạn', dists: ['Huyện Ba Bể', 'Huyện Bạch Thông', 'Huyện Chợ Đồn', 'Huyện Na Ri', 'Huyện Ngân Sơn', 'Thị xã Bắc Kạn'] },
    { name: 'Tuyên Quang', dists: ['Thị xã Tuyên Quang', 'Huyện Chiêm Hóa', 'Huyện Hàm Yên', 'Huyện Na Hang', 'Huyện Sơn Dương', 'Huyện Yên Sơn'] },
    { name: 'Lào Cai', dists: ['Thành phố Lào Cai', 'Huyện Sa Pa', 'Huyện Bát Xát', 'Huyện Bảo Yên', 'Huyện Bảo Thắng', 'Huyện Si Ma Cai', 'Huyện Văn Bàn', 'Huyện Mường Khương', 'Huyện Bắc Hà'] },
    { name: 'Điện Biên', dists: ['Huyện Điện Biên', 'Huyện Điện Biên Đông', 'Huyện Mường Ảng', 'Huyện Mường Chà', 'Huyện Mường Nhé', 'Huyện Nậm Pồ', 'Huyện Tủa Chùa', 'Huyện Tuần Giáo'] },
    { name: 'Lai Châu', dists: ['Huyện Tam Đường', 'Huyện Than Uyên', 'Huyện Nậm Nhùn', 'Huyện Mường Tè', 'Huyện Sìn Hồ', 'Huyện Tân Uyên', 'Huyện Phong Thổ', 'Thành phố Lai Châu'] },
    { name: 'Sơn La', dists: ['Thị xã Sơn La', 'Huyện Bắc Yên', 'Huyện Mai Sơn', 'Huyện Mộc Châu', 'Huyện Mường La', 'Huyện Phù Yên', 'Huyện Quỳnh Nhai', 'Huyện Sông Mã', 'Huyện Thuận Châu', 'Huyện Yên Châu'] },
    { name: 'Yên Bái', dists: ['Thị xã Yên Bái', 'Huyện Lục Yên', 'Huyện Mù Cang Chải', 'Huyện Trạm Tấu', 'Huyện Trấn Yên', 'Huyện Văn Chấn', 'Huyện Văn Yên', 'Huyện Yên Bình'] },
    { name: 'Hòa Bình', dists: ['Thành phố Hòa Bình', 'Huyện Lương Sơn', 'Huyện Cao Phong', 'Huyện Đà Bắc', 'Huyện Kim Bôi', 'Huyện Kỳ Sơn', 'Huyện Lạc Sơn', 'Huyện Lạc Thủy', 'Huyện Mai Châu', 'Huyện Tân Lạc', 'Huyện Yên Thủy'] },
    { name: 'Thái Nguyên', dists: ['Thành phố Thái Nguyên', 'Thành phố Sông Công', 'Thị xã Phổ Yên', 'Huyện Phú Bình', 'Huyện Đồng Hỷ', 'Huyện Võ Nhai', 'Huyện Định Hóa', 'Huyện Đại Từ', 'Huyện Phú Lương'] },
    { name: 'Lạng Sơn', dists: ['TP Lạng Sơn', 'Huyện Bắc Sơn', 'Huyện Tràng Định', 'Huyện Bình Gia', 'Huyện Văn Lãng', 'Huyện Cao Lộc', 'Huyện Văn Quan', 'Huyện Hữu Lũng', 'Huyện Chi Lăng', 'Huyện Lộc Bình', 'Huyện Đình Lập'] },
    { name: 'Quảng Ninh', dists: ['TP Hạ Long', 'TP Móng Cái', 'TP.Cẩm Phả', 'TP.Uông Bí', 'Huyện Bình Liêu', 'Huyện Tiên Yên', 'Huyện Đầm Hà', 'Huyện Hải Hà', 'Huyện Ba Chẽ', 'Huyện Vân Đồn', 'Thị xã Đông Triều', 'Thị xã Quảng Yên', 'Huyện Cô Tô'] },
    { name: 'Bắc Giang', dists: ['TP Bắc Giang', 'Huyện Yên Thế', 'Huyện Tân Yên', 'Huyện Lạng Giang', 'Huyện Lục Nam', 'Huyện Lục Ngạn', 'Huyện Sơn Động', 'Huyện Yên Dũng', 'Huyện Việt Yên', 'Huyện Hiệp Hòa'] },
    { name: 'Phú Thọ', dists: ['TP Việt Trì', 'Thị xã Phú Thọ', 'Huyện Đoan Hùng', 'Huyện Hạ Hoà', 'Huyện Thanh Ba', 'Huyện Phù Ninh', 'Huyện Yên Lập', 'Huyện Cẩm Khê', 'Huyện Tam Nông', 'Huyện Lâm Thao', 'Huyện Thanh Sơn', 'Huyện Thanh Thuỷ', 'Huyện Tân Sơn'] },
    { name: 'Vĩnh Phúc', dists: ['TP Vĩnh Yên', 'TP.Phúc Yên', 'Huyện Lập Thạch', 'Huyện Tam Dương', 'Huyện Tam Đảo', 'Huyện Bình Xuyên', 'Huyện Yên Lạc', 'Huyện Vĩnh Tường', 'Huyện Sông Lô'] },
    { name: 'Bắc Ninh', dists: ['TP Bắc Ninh', 'Huyện Yên Phong', 'Huyện Quế Võ', 'Huyện Tiên Du', 'Thị xã Từ Sơn', 'Huyện Thuận Thành', 'Huyện Gia Bình', 'Huyện Lương Tài'] },
    { name: 'Hải Dương', dists: ['TP Hải Dương', 'TP.Chí Linh', 'Huyện Nam Sách', 'Thị xã Kinh Môn', 'Huyện Kim Thành', 'Huyện Thanh Hà', 'Huyện Cẩm Giàng', 'Huyện Bình Giang', 'Huyện Gia Lộc', 'Huyện Tứ Kỳ', 'Huyện Ninh Giang', 'Huyện Thanh Miện'] },
    { name: 'TP Hải Phòng', dists: ['Quận Hồng Bàng', 'Quận Ngô Quyền', 'Quận Lê Chân', 'Quận Hải An','Quận Kiến An', 'Quận Đồ Sơn', 'Quận Dương Kinh', 'Huyện Thủy Nguyên', 'Huyện An Dương', 'Huyện An Lão', 'Huyện Kiến Thụy', 'Huyện Tiên Lãng', 'Huyện Vĩnh Bảo', 'Huyện Cát Hải', 'Huyện Bạch Long Vĩ'] },
    { name: 'Hưng Yên', dists: ['TP Hưng Yên', 'Huyện Văn Lâm', 'Huyện Văn Giang', 'Huyện Yên Mỹ', 'Thị xã Mỹ Hào', 'Huyện Ân Thi', 'Huyện Khoái Châu', 'Huyện Kim Động', 'Huyện Tiên Lữ', 'Huyện Phù Cừ'] },
    { name: 'Thái Bình', dists: ['TP Thái Bình', 'Huyện Quỳnh Phụ', 'Huyện Hưng Hà', 'Huyện Đông Hưng', 'Huyện Thái Thụy', 'Huyện Tiền Hải', 'Huyện Kiến Xương', 'Huyện Vũ Thư'] },
    { name: 'Hà Nam', dists: ['TP Phủ Lý', 'Thị xã Duy Tiên', 'Huyện Kim Bảng', 'Huyện Thanh Liêm', 'Huyện Bình Lục', 'Huyện Lý Nhân'] },
    { name: 'Nam Định', dists: ['TP Nam Định', 'Huyện Mỹ Lộc', 'Huyện Vụ Bản', 'Huyện Ý Yên', 'Huyện Nghĩa Hưng', 'Huyện Nam Trực', 'Huyện Trực Ninh', 'Huyện Xuân Trường', 'Huyện Giao Thủy', 'Huyện Hải Hậu'] },
    { name: 'Ninh Bình', dists: ['TP Ninh Bình', 'TP Tam Điệp','Huyện Gia Viễn', 'Huyện Hoa Lư', 'Huyện Kim Sơn', 'Huyện Nho Quan', 'Huyện Yên Khánh', 'Huyện Yên Mô'] },
    { name: 'Thanh Hóa', dists: ['Thành phố Thanh Hóa', 'Thị xã Bỉm Sơn', 'Thị xã Sầm Sơn', 'Huyện Đông Sơn', 'Huyện Quảng Xương', 'Huyện Hoằng Hóa', 'Huyện Hậu Lộc', 'Huyện Hà Trung', 'Huyện Nga Sơn', 'Huyện Thiệu Hóa', 'Huyện Triệu Sơn', 'Huyện Yên Định', 'Huyện Tĩnh Gia', 'Huyện Nông Cống', 'Huyện Ngọc Lặc', 'Huyện Cẩm Thủy', 'Huyện Thạch Thành', 'Huyện Vĩnh Lộc', 'Huyện Thọ Xuân', 'Huyện Như Thanh', 'Huyện Như Xuân', 'Huyện Thường Xuân', 'Huyện Lang Chánh', 'Huyện Bá Thước', 'Huyện Quan Hóa', 'Huyện Quan Sơn', 'Huyện Mường Lát'] },
    { name: 'Nghệ An', dists: ['TP Vinh', 'Thị xã Cửa Lò', 'Thị xã Thái Hòa', 'Huyện Quế Phong', 'Huyện Quỳ Châu', 'Huyện Kỳ Sơn', 'Huyện Tương Dương', 'Huyện Nghĩa Đàn', 'Huyện Quỳ Hợp', 'Huyện Quỳnh Lưu', 'Huyện Con Cuông', 'Huyện Tân Kỳ', 'Huyện Anh Sơn', 'Huyện Diễn Châu', 'Huyện Yên Thành', 'Huyện Đô Lương', 'Huyện Thanh Chương','Huyện Nghi Lộc', 'Huyện Nam Đàn', 'Huyện Hưng Nguyên', 'Thị xã Hoàng Mai'] },
    { name: 'Hà Tĩnh', dists: ['Huyện Can Lộc', 'Huyện Cẩm Xuyên', 'Huyện Đức Thọ', 'Huyện Hương Khê', 'Huyện Hương Sơn', 'Huyện Kỳ Anh', 'Huyện Lộc Hà', 'Huyện Nghi Xuân', 'Huyện Thạch Hà', 'Huyện Vũ Quang', 'TP Hà Tĩnh', 'Thị xã Hồng Lĩnh', 'Thị xã Kỳ Anh'] },
    { name: 'Quảng Bình', dists: ['TP Đồng Hới', 'Thị xã Ba Đồn', 'Huyện Lệ Thủy', 'Huyện Quảng Ninh', 'Huyện Bố Trạch', 'Huyện Quảng Trạch', 'Huyện Tuyên Hóa', 'Huyện Minh Hóa'] },
    { name: 'Quảng Trị', dists: ['TP Đông Hà', 'Thị xã Quảng Trị', 'Huyện Cam Lộ', 'Huyện Hải Lăng', 'Huyện Triệu Phong', 'Huyện Hướng Hóa', 'Huyện Vĩnh Linh', 'Huyện Gio Linh', 'Huyện Cồn Cỏ', 'Huyện Đakrông'] },
    { name: 'Thừa Thiên Huế', dists: ['TP Huế', 'Huyện A Lưới',  'Thị xã Hương Thủy',  'Thị xã Hương Trà',  'Huyện Nam Đông',  'Huyện Phong Điền', 'Huyện Phú Lộc',  'Huyện Phú Vang',  'Huyện Quảng Điền'] },
    { name: 'TP Đà Nẵng', dists: ['Quận Liên Chiểu', 'Quận Thanh Khê', 'Quận Hải Châu', 'Quận Sơn Trà', 'Quận Ngũ Hành Sơn', 'Quận Cẩm Lệ', 'Huyện Hòa Vang', 'Huyện Hoàng Sa'] },
    { name: 'Quảng Nam', dists: ['TP Tam Kỳ', 'TP Hội An', 'Huyện Tây Giang', 'Huyện Đại Lộc', 'Thị xã Điện Bàn', 'Huyện Duy Xuyên', 'Huyện Quế Sơn', 'Huyện Nam Giang', 'Huyện Phước Sơn', 'Huyện Hiệp Đức', 'Huyện Thăng Bình', 'Huyện Tiên Phước', 'Huyện Bắc Trà My', 'Huyện Nam Trà My', 'Huyện Núi Thành', 'Huyện Phú Ninh', 'Huyện Nông Sơn'] },
    { name: 'Quảng Ngãi', dists: ['Thành phố Quảng Ngãi', 'Huyện Lý Sơn', 'Huyện Bình Sơn', 'Huyện Trà Bồng', 'Huyện Sơn Tịnh', 'Huyện Sơn Tây', 'Huyện Sơn Hà', 'Huyện Tư Nghĩa', 'Huyện Nghĩa Hành', 'Huyện Minh Long', 'Huyện Mộ Đức', 'Huyện Đức Phổ', 'Huyện Ba Tơ', 'Huyện Tây Trà'] },
    { name: 'Bình Định', dists: ['TP Quy Nhơn', 'Huyện An Lão', 'Huyện Hoài Nhơn', 'Huyện Hoài Ân', 'Huyện Phù Mỹ', 'Huyện Vĩnh Thạnh', 'Huyện Tây Sơn', 'Huyện Phù Cát', 'Thị xã An Nhơn', 'Huyện Tuy Phước', 'Huyện Vân Canh'] },
    { name: 'Phú Yên', dists: ['Thị xã Tuy Hòa',  'Huyện Đồng Xuân', 'Huyện Sơn Hòa', 'Huyện Sông Cầu', 'Huyện Sông Hinh', 'Huyện Tuy An', 'Huyện Tuy Hòa'] },
    { name: 'Khánh Hòa', dists: ['Thành phố Nha Trang ', 'Thành phố Cam Ranh',  'Thị xã Ninh Hòa',  'Huyện Vạn Ninh', 'Huyện Diên Khánh', 'Huyện Khánh Vĩnh', 'Huyện Khánh Sơn', 'Huyện Cam Lâm', 'Huyện đảo Trường Sa'] },
    { name: 'Ninh Thuận', dists: ['TP Phan Rang', 'Huyện Bác Ái', 'Huyện Ninh Sơn', 'Huyện Ninh Hải', 'Huyện Thuận Bắc', 'Huyện Thuận Nam'] },
    { name: 'Bình Thuận', dists: ['Thành phố Phan Thiết', 'Thị xã La Gi',  'Huyện Bắc Bình', 'Huyện Đức Linh', 'Huyện Hàm Tân', 'Huyện Hàm Thuận Bắc', 'Huyện Hàm Thuận Nam', 'Huyện Phú Quý', 'Huyện Tánh Linh', 'Huyện Tuy Phong'] },
    { name: 'Kom Tum', dists: ['Thành phố Kon Tum',  'Huyện Đắk Glei', 'Huyện Đắk Hà', 'Huyện Đắk Tô', 'Huyện Kon Plông', 'Huyện Kon Rẫy', 'Huyện Ngọc Hồi', 'Huyện Sa Thầy', 'Huyện Tu Mơ Rông'] },
    { name: 'Gia Lai', dists: ['TP Pleiku', 'Thị xã An Khê', 'Thị xã Ayun Pa', 'Huyện KBang', 'Huyện Đăk Đoa', 'Huyện Chư Păh', 'Huyện La Grai', 'Huyện Mang Yang', 'Huyện Kông Chro', 'Huyện Đức Cơ', 'Huyện Chư Prông', 'Huyện Chư Sê', 'Huyện Đăk Pơ', 'Huyện la Pa','Huyện Krông Pa', 'Huyện Phú Thiện', 'Huyện Chư Pưh'] },
    { name: 'Đắk Lắk', dists: ['TP Buôn Ma Thuột', 'Huyện Ea H Leo', 'Huyện Krông Buk', 'Huyện Krông Năng', 'Huyện Ea Súp', 'Huyện Cư Mgar', 'Huyện Krông Pắc', 'Huyện Ea Kar', 'Huyện M Đrắk', 'Huyện Krông Ana', 'Huyện Krông Bông','Huyện Lắk', 'Huyện Buôn Đôn', 'Huyện Cư Kuin', 'Thị xã Buôn Hồ'] },
    { name: 'Đắk Nông', dists: ['Thị xã Gia Nghĩa ', 'Huyện Đăk RLấp', 'Huyện Đăk Mil', 'Huyện Cư Jut', 'Huyện Đăk Song', 'Huyện Krông Nô', 'Huyện Đăk GLong', 'Huyện Tuy Đức'] },
    { name: 'Lâm Đồng', dists: ['TP Đà Lạt', 'TP Bảo Lộc', 'Huyện Đam Rông', 'Huyện Lạc Dương', 'Huyện Lâm Hà', 'Huyện Đơn Dương', 'Huyện Đức Trọng', 'Huyện Di Linh', 'Huyện Bảo Lâm', 'Huyện Đạ Huoai', 'Huyện Đạ Tẻh', 'Huyện Cát Tiên'] },
    { name: 'Bình Phước', dists: ['Thị xã Đông Xoài', 'Huyện Đồng Phú', 'Huyện Chơn Thành', 'Thị xã Bình Long', 'Huyện Lộc Ninh', 'Huyện Bù Đốp', 'Thị xã Phước Long', 'Huyện Bù Đăng', 'Huyện Hớn Quản', 'Huyện Bù Gia Mập', 'Huyện Phú Riềng'] },
    { name: 'Tây Ninh', dists: ['TP Tây Ninh', 'Huyện Tân Biên', 'Huyện Tân Châu', 'Huyện Dương Minh Châu', 'Huyện Châu Thành', 'Huyện Hòa Thành', 'Huyện Bến Cầu', 'Huyện Gò Dầu', 'Huyện Trảng Bàng'] },
    { name: 'Bình Dương', dists: ['TP Thủ Dầu Một', 'TP Dĩ An', 'Thị xã Bến Cát', 'Thị xã Tân Uyên', 'Thị xã Thuận An', 'Huyện Phú Giáo', 'Huyện Dầu Tiếng', 'Huyện Bắc Tân Uyên', 'Huyện Bàu Bàng', 'Huyện Phú Giáo'] },
    { name: 'Đồng Nai', dists: ['TP Biên Hòa', 'Huyện Vĩnh Cửu', 'Huyện Tân Phú', 'Huyện Định Quán', 'Huyện Thống Nhất', 'Thị xã Long Khánh', 'Huyện Xuân Lộc', 'Huyện Long Thành', 'Huyện Nhơn Thạnh', 'Huyện Trảng Bom', 'Huyện Cẩm Mỹ'] },
    { name: 'Bà Rịa - Vũng Tàu', dists: ['TP Vũng Tàu', 'TP Bà Rịa', 'Huyện Xuyên Mộc', 'Huyện Long Điền', 'Huyện Côn Đảo', 'Huyện Tân Thành', 'Huyện Châu Đức', 'Huyện Đất Đỏ'] },
    { name: 'TP Hồ Chí Minh', dists: ['Quận 1', 'Quận 12', 'Quận Gò Vấp', 'Quận Bình Thạnh', 'Quận Tân Phú', 'Quận Phú Nhuận', 'Quận 3', 'Quận 10', 'Quận 11', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 8', 'Quận Bình Tân', 'Quận 7', 'Huyện Củ Chi', 'Huyện Hóc Môn', 'Huyện Bình Chánh', 'Huyện Nhà Bè', 'Huyện Cần Giờ'] },
    { name: 'TP Thủ Đức', dists: ['Quận Thủ Đức', 'Quận 9', 'Quận 2']},
    { name: 'Long An', dists: ['TP Tân An', 'Huyện Vĩnh Hưng', 'Huyện Mộc Hóa', 'Huyện Tân Thạnh', 'Huyện Thạnh Hóa', 'Huyện Đức Huệ', 'Huyện Đức Hòa', 'Huyện Bến Lức', 'Huyện Thủ Thừa', 'Huyện Châu Thành', 'Huyện Tân Trụ','Huyện Cần Đước', 'Huyện Cần Giuộc', 'Huyện Tân Hưng', 'Thị xã Kiến Tường'] },
    { name: 'Tiền Giang', dists: ['TP Mỹ Tho', 'Thị xã Gò Công', 'Thị xã Cai Lậy', 'Huyện Tân Phước', 'Huyện Cái Bè', 'Huyện Cai Lậy', 'Huyện Châu Thành', 'Huyện Chợ Gạo', 'Huyện Gò Công Tây', 'Huyện Gò Công Đông', 'Huyện Tân Phú'] },
    { name: 'Bến Tre', dists: ['TP Bến Tre', 'Huyện Châu Thành', 'Huyện Chợ Lách', 'Huyện Mỏ Cày Bắc', 'Huyện Giồng Trôm', 'Huyện Bình Đại', 'Huyện Ba Trì', 'Huyện Thạnh Phú', 'Huyện Mỏ Cày Nam'] },
    { name: 'Trà Vinh', dists: ['TP Trà Vinh', 'Huyện Càng Long', 'Huyện Cầu Kè', 'Huyện Tiểu Cần', 'Huyện Châu Thành', 'Huyện Trà Cú', 'Huyện Cầu Ngang', 'Huyện Duyên Hải', 'Thị xã Duyên Hải'] },
    { name: 'Vĩnh Long', dists: ['TP Vĩnh Long', 'Huyện Long Hồ', 'Huyện Mang Thít', 'Huyện Vũng Liêm', 'Huyện Tam Bình', 'Thị xã Bình Minh', 'Huyện Trà Ôn', 'Huyện Bình Tân'] },
    { name: 'Đồng Tháp', dists: ['TP Cao Lãnh', 'TP Sa Đéc', 'TP Hồng Ngự', 'Huyện Tân Hồng', 'Huyện Tam Nông', 'Huyện Tháp Mười', 'Huyện Cao Lãnh', 'Huyện Thanh Bình', 'Huyện Lấp Vò', 'Huyện Lai Vung', 'Huyện Châu Thành'] },
    { name: 'An Giang', dists: ['TP Long Xuyên', 'TP Châu Đốc', 'Huyện An Phú', 'Thị xã Tân Châu', 'Huyện Phú Tân', 'Huyện Châu Phú', 'Huyện Tịnh Biên', 'Huyện Tri Tôn', 'Huyện Châu Thành', 'Huyện Chợ Mới', 'Huyện Thoại Sơn'] },
    { name: 'Kiên Giang', dists: ['TP Rạch Giá', 'TP Hà Tiên', 'Huyện Kiên Lương', 'Huyện Hòn Đất', 'Huyện Tân Hiệp', 'Huyện Châu Thành', 'Huyện Giồng Riềng', 'Huyện Gò Quao', 'Huyện An Biên', 'Huyện An Minh', 'Huyện Vĩnh Thuận','Huyện Phú Quốc', 'Huyện Kiên Hải', 'Huyện U Minh Thượng', 'Huyện Giang Thành'] },
    { name: 'TP Cần Thơ', dists: ['Quận Ninh Kiều', 'Quận Ô Môn', 'Quận Bình Thủy', 'Quận Cái Răng', 'Quận Thốt Nốt', 'Huyện Vĩnh Thạnh', 'Huyện Cờ Đỏ', 'Huyện Phong Điền', 'Huyện Thới Lai'] },
    { name: 'Hậu Giang', dists: ['TP Vị Thanh', 'Huyện Vị Thủy', 'Huyện Long Mỹ', 'Huyện Phụng Hiệp', 'Huyện Châu Thành', 'Huyện Châu Thành A', 'Thị xã Ngã Bảy', 'Thị xã Long Mỹ'] },
    { name: 'Sóc Trăng', dists: ['TP Sóc Trăng', 'Huyện Kế Sách', 'Huyện Mỹ Tú', 'Huyện Mỹ Xuyên', 'Huyện Thạnh Trị', 'Huyện Long Phú', 'Thị xã Vĩnh Châu', 'Huyện Cù Lao Dung', 'Thị xã Ngã Năm', 'Huyện Châu Thành', 'Huyện Trần Đề'] },
    { name: 'Bạc Liêu', dists: ['TP Bạc Liêu', 'Huyện Hồng Dân', 'Huyện Phước Long', 'Huyện Vĩnh Lợi', 'Thị xã Giá Rai', 'Huyện Đông Hải', 'Huyện Hòa Bình', 'Huyện Thanh Bình'] },
    { name: 'Cà Mau', dists: ['TP Cà Mau', 'Huyện Thới Bình', 'Huyện U Minh', 'Huyện Trần Văn Thời', 'Huyện Cái Nước', 'Huyện Đầm Dơi', 'Huyện Ngọc Hiển', 'Huyện Năm Căn', 'Huyện Phú Tân'] },
  ];
  dists !: Array<any>;
  count !: any;
  postForm !: FormGroup;
  post !: any;
  public brands = ['Acura', 'Alfa Romeo', 'Audi', 'Baic', 'Bentley', 'BMW', 'Brilliance', 'BYD', 'Cadillac',
    'Changan', 'Chery', 'Chevrolet', 'Chrysler', 'Daewoo', 'Daihatsu', 'Dodge', 'Dongfeng',
    'Ferrari', 'Fiat', 'Ford', 'Gaz', 'Geely', 'Haima', 'Hino', 'Honda', 'Hummer', 'Hyundai',
    'Infiniti', 'Isuzu', 'Jaguar', 'Jeep', 'JRD', 'Kia', 'Lada', 'Lamborghini', 'Landrover',
    'Lexus', 'Lifan', 'Lincoln', 'Luxgen', 'Maserati', 'Mazda', 'Mekong', 'Mercedes-Benz',
    'MG', 'Mini', 'Mitsubishi', 'Nissan', 'Opel', 'Peugeot', 'Porsche', 'Proton', 'Ram', 'Renault',
    'Rolls-Royce', 'Samsung', 'Smart', 'Ssangyong', 'Subaru', 'Suzuki', 'Sym', 'Tesla', 'Thaco',
    'Tobe', 'Toyota', 'Uaz', 'Vinaxuki', 'Vinfast', 'Volkswagen', 'Volvo', 'Zotye', 'Hãng khác']

  public colors = ["-","Bạc","Cát","Ghi","Hồng","Kem","Nâu","Trắng","Vàng",
                     "Xanh","Xám","Đen","Đỏ","Đồng","Nhiều màu","Màu khác"];

  public years =["Trước 1990","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999",
                  "2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010",
                  "2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];

  constructor(private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      phone: new FormControl(null,[
        Validators.required
      ]),

      price: new FormControl(),
      // name: new FormControl(),
      province : new FormControl(),
      district : new FormControl(),
      color: new FormControl(),
      title: new FormControl(),
      seat: new FormControl(),
      km: new FormControl(),
      brand: new FormControl(),
      model: new FormControl(),
      year: new FormControl(),
      type: new FormControl(),
      content: new FormControl(),
      image: new FormControl()
    });
    this.getPost(this.route.snapshot.paramMap.get('slug'))


  }
  getPost(slug) { this.authService.getDetailPost(slug).subscribe((data) => {
    this.post = data
     console.log(this.post['data']);
   })}
  onSubmit(){
    console.log(this.postForm.value)
    console.log((this.postForm.get('price')?.value))
  }
  changePros(count) {
    this.dists = this.prosList.find(con => con.name == count).dists;//thay đổi quận huyện khi chọn tỉnh khác
  }
  editPost(id) {
    const title = this.postForm.get('title')?.value;
    const postContent = this.postForm.get('content')?.value;
    const contactDistrict = this.postForm.get('district')?.value;
    const contactProvince = this.postForm.get('province')?.value;
    const contactPhone = this.postForm.get('phone')?.value;
    const carBrand = this.postForm.get('brand')?.value;
    const carModel = this.postForm.get('model')?.value;
    const carType = this.postForm.get('type')?.value;
    const carSeats = this.postForm.get('seat')?.value;
    const carColor = this.postForm.get('color')?.value;
    const carOdometer = this.postForm.get('km')?.value;
    const carYear = this.postForm.get('year')?.value;
    const carPrice = this.postForm.get('price')?.value;
    this.authService.updatePost(id ,title, postContent, contactProvince, contactDistrict,
      contactPhone, carBrand, carModel, carType, carSeats, carColor, carOdometer, carYear,
      carPrice).subscribe((data) =>{
        console.log(data);
      })

  }
}
