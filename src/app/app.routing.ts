import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { rejisterComponent } from './rejister/rejister.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthGuard } from './auth/auth.guard';
import { StatusComponent } from './status/status.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
// import { AdminGuard } from './auth/admin.guard';
import { AdminComponent } from './pages/admin/admin.component';
const appRoutes: Routes = [
      { path: 'home', component: Page1Component  },
      { path: 'error', component: ErrorPageComponent  },
    //   { path: 'admin', component: AdminComponent  },
      { path: 'status', component: StatusComponent  },
      { path: 'login', component: LoginComponent },
      { path: 'rejister', component: rejisterComponent },
      { path: 'aboutMe', component: Page2Component },
      { path: 'myContacts', component: Page3Component },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
   
 //   otherwise redirect to home
    { path: '**', redirectTo: 'error' }
];
RouterModule.forRoot([
    ])
export const routing = RouterModule.forRoot(appRoutes);