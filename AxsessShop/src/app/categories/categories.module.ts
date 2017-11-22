import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';

import {
    MatTableModule, MatGridListModule,MatCardModule,MatDialogModule,  MatButtonModule,
    MatButtonToggleModule
  } from '@angular/material';
import { CategoriesComponent } from './categories.component';



  
@NgModule({
  declarations: [
    CategoriesComponent,
  ],
  imports: [   
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    CategoriesRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class CategoriesModule { }
