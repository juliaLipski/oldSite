import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { googlePieChartService } from './factory/googlePieChartService';
import { googleChartsBaseService } from './factory/googleChartsBaseService';
import { myWorksdataService } from './factory/myWorksdataService';
import { myContactsService } from './factory/myContactsService';
import { aboutMeService } from './factory/aboutMeService';
import { userService } from './factory/userService';
import { loginService } from './factory/loginService';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { rejisterComponent } from './rejister/rejister.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { AlertComponent } from './alert/alert-component';
import { StatusComponent } from './status/status.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ErrorDisplayComponent } from './error-display/error-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { CaruselComponent } from './carusel/carusel.component';
// import { MaterialModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    MyWorksComponent,
    AboutMeComponent,
    MapComponent,
    LoginComponent,
    rejisterComponent,
    ColumnChartComponent,
    // AdminComponent,
    AlertComponent,
    StatusComponent,
    ErrorDisplayComponent,
    MyContactsComponent,
    ErrorPageComponent,
    FooterComponent,
    CaruselComponent
  ],
  imports: [
    BrowserModule,
    // MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2GoogleChartsModule,
    AngularFontAwesomeModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOn05Dn-B6k6UwhXa1Wvgalo0_WpDLMUg',
      libraries: ["places"],
      region: 'IL'
    })
  ],
  providers: [myWorksdataService,
    loginService,
    myContactsService,
    userService,
    aboutMeService,
    googleChartsBaseService,
    googlePieChartService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
