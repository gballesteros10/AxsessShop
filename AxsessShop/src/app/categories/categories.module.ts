import { NgModule } from '@angular/core';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from '../nav/nav.component';


  
@NgModule({
  declarations: [
    CategoriesComponent,
    NavComponent
  ],
  imports: [   
    SharedModule,
    CategoriesRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class CategoriesModule { }
