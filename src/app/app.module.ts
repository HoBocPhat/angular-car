import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatIconModule } from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgxPaginationModule } from 'ngx-pagination';
import { BreadcrumbModule } from 'angular-crumbs';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatExpansionModule} from '@angular/material/expansion';

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
import { CarsaleComponent } from './components/carsale/carsale/carsale.component';

import { PostService } from './components/services/post/post.service';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { ChangeInfoComponent } from './components/change-info/change-info.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { PostSavedComponent } from './components/post-saved/post-saved.component';
import { ManagePostComponent } from './components/manage-post/manage-post.component';
import { AdminComponent } from './components/admin/admin.component';
import { SortPipe } from './pipe/sort.pipe';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { ChangeNewsComponent } from './components/change-news/change-news.component';
import { ChangePostComponent } from './components/change-post/change-post.component';
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
    CarsaleComponent,
    CardetailComponent,
    ChangeInfoComponent,
    ChangePassComponent,
    PostSavedComponent,
    ManagePostComponent,
    AdminComponent,
    SortPipe,
    NewsComponent,
    AboutComponent,
    AddNewsComponent,
    ChangeNewsComponent,
    ChangePostComponent,

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
    NgxPaginationModule,
    BreadcrumbModule,
    GalleryModule,
    LightboxModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    MatDividerModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    IvyCarouselModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RecompriceComponent,LoginComponent]
})
export class AppModule { }
