import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './components/api/api.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {PostComponent} from './components/post/post.component';
import { AuthGuard } from './guards/auth.guard';
import { CarsaleComponent } from './components/carsale/carsale/carsale.component';

const routes: Routes = [
  {path: 'trangchu', component: HomeComponent, data: {breadcrumb:'Trang chủ'}},
  {path: 'muaxe', component: CarsaleComponent, data: {breadcrumb:'Mua xe'}},
  {path: 'banxe', component: PostComponent, canActivate: [AuthGuard]},
  {path: 'tintuc', component: HomeComponent},
  {path: 'vechungtoi', component: HomeComponent },
  {path: 'dangky', component: SignupComponent},
  {path: 'dangnhap', component: LoginComponent},
  {path: 'quenmatkhau', component: ForgotpasswordComponent},
  {path: '',component: HomeComponent},
  {path: 'api', component: ApiComponent},
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
