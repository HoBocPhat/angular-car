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
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GridModule, PagerModule, GridAllModule } from '@syncfusion/ej2-angular-grids';
// import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { TreeGridModule} from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid';

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
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { PostSavedComponent } from './components/post-saved/post-saved.component';
import { ManagePostComponent } from './components/manage-post/manage-post.component';
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
    ChangePassComponent,
    PostSavedComponent,
    ManagePostComponent,

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
    GridModule,
    PagerModule,
    CheckBoxModule,
    DatePickerAllModule,
    ToolbarModule,
    NumericTextBoxAllModule,
    DialogModule,
    TreeGridModule
  ],
  providers: [PageService, SortService, FilterService],
  bootstrap: [AppComponent],
  entryComponents: [RecompriceComponent,LoginComponent]
})
export class AppModule { }
