import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PostComponent} from './components/post/post.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
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
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CarBrandComponent } from './components/car-brand/car-brand.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
const routes: Routes = [
  {path: 'trangchu', component: HomeComponent },
  {path: 'muaxe', component: CarsaleComponent},
  {path: 'muaxe/hãng/:brand', component: CarBrandComponent},
  {path: 'banxe', component: PostComponent,canActivate: [AuthGuard]},
  {path: 'muaxe/:slug', component: CardetailComponent},
  {path: 'tintuc', component: NewsComponent},
  {path: 'tintuc/:slug', component: NewsDetailComponent},
  {path: 'vechungtoi', component: AboutComponent },
  {path: 'dangky', component: SignupComponent},
  {path: 'dangnhap', component: LoginComponent},
  {path: 'quenmatkhau', component: ForgotpasswordComponent, canActivate: [AuthGuard]},
  {path: 'quenmatkhau/:token', component: ResetPassComponent, canActivate: [AuthGuard]},
  {path: 'doimatkhau', component: ChangePassComponent, canActivate: [AuthGuard]},
  {path: 'thongtintaikhoan', component: UserInfoComponent, canActivate: [AuthGuard]},
  {path: 'suathongtintaikhoan', component: ChangeInfoComponent, canActivate: [AuthGuard]},
  {path: 'bailuu', component: PostSavedComponent, canActivate: [AuthGuard]},
  {path: 'quanlybaidang', component: ManagePostComponent, canActivate: [AuthGuard]},
  {path: 'suabaidang/:slug', component: ChangePostComponent,canActivate: [AuthGuard] },
  {path: '', component: HomeComponent},
  {path: 'admin/themtintuc', component: AddNewsComponent , canActivate: [AdminGuard]},
  {path: 'admin/:slug', component: ChangeNewsComponent , canActivate: [AdminGuard]},
  {path: 'admin', component: AdminComponent , canActivate: [AdminGuard]}
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
