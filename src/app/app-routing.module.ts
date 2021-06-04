import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PostComponent} from './components/post/post.component';
import { AuthGuard } from './guards/auth.guard';
import { CarsaleComponent } from './components/carsale/carsale/carsale.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { ChangeInfoComponent } from './components/change-info/change-info.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { ChangeNewsComponent } from './components/change-news/change-news.component';
import { AdminComponent } from './components/admin/admin.component';
import { PostSavedComponent } from './components/post-saved/post-saved.component';
import { ManagePostComponent } from './components/manage-post/manage-post.component';
import { ChangePostComponent } from './components/change-post/change-post.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';

const routes: Routes = [
  {path: 'trangchu', component: HomeComponent, data: {breadcrumb:'Trang chủ'} },
  {path: 'muaxe', component: CarsaleComponent,data: {breadcrumb:'Mua xe'}},
  {path: 'banxe', component: PostComponent, canActivate: [AuthGuard]},
  {path: 'muaxe/:slug', component: CardetailComponent},
  {path: 'tintuc', component: NewsComponent},
  {path: 'vechungtoi', component: AboutComponent },
  {path: 'dangky', component: SignupComponent},
  {path: 'dangnhap', component: LoginComponent},
  {path: 'quenmatkhau', component: ForgotpasswordComponent},
  {path: 'quenmatkhau/matkhaumoi', component: ResetPassComponent},
  {path: 'doimatkhau', component: ChangePassComponent, canActivate: [AuthGuard]},
  {path: 'thongtintaikhoan', component: ChangeInfoComponent, canActivate: [AuthGuard]},
  {path: 'bailuu', component: PostSavedComponent, canActivate: [AuthGuard]},
  {path: 'quanlybaidang', component: ManagePostComponent, canActivate: [AuthGuard]},
  {path: 'suabaidang', component: ChangePostComponent,canActivate: [AuthGuard] },
  {path: '', component: HomeComponent},
  {path: 'admin/themtintuc', component: AddNewsComponent},
  {path: 'admin/:slug', component: ChangeNewsComponent},
  {path: 'admin', component: AdminComponent}
  // {
  //   path: '',
  //   children: [
  //     {path: '', redirectTo: '/trangchu', pathMatch: 'full'},
  //     {
  //       path: 'trangchu',
  //       loadChildren: 'src/app/home/home.module#HomeModule'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
