import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserSignupComponent } from './users/user-signup/user-signup.component';
import { UserLoginService } from './users/user-login.service';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: UserLoginComponent },
      { path: 'signup', component: UserSignupComponent }
    ], { useHash: true })
  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
