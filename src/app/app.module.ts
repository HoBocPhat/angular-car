import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatIconModule } from '@angular/material/icon';
// import {Router} from '@angular/router-deprecated';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { PostComponent } from './components/post/post.component';
import { RecompriceComponent } from './components/recomprice/recomprice.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiComponent } from './components/api/api.component';
import { CarsaleComponent } from './components/carsale/carsale/carsale.component';

import { PostService } from './components/services/post/post.service';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { ChangeInfoComponent } from './components/change-info/change-info.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    PostComponent,
    RecompriceComponent,
    ApiComponent,
    CarsaleComponent,
    CardetailComponent,
    ChangeInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MDBBootstrapModule.forRoot(),
    MatIconModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CarouselModule,
    WavesModule,
    NgxPaginationModule,
    BreadcrumbModule,
    NgImageSliderModule,
    NgxImageGalleryModule,
    GalleryModule,
    LightboxModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
  entryComponents: [RecompriceComponent,LoginComponent]
})
export class AppModule { }
