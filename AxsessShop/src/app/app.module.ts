
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
