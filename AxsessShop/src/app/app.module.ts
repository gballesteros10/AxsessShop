

import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';

import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserSignupComponent } from './users/user-signup/user-signup.component';
import { UserLoginService } from './users/user-login.service';
import { UserSignupService } from './users/user-signup.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserLoginComponent,
    UserSignupComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  providers: [UserLoginService, UserSignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
