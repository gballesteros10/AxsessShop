import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';


import {
    MatTableModule, 
    MatGridListModule,
    MatCardModule,
    MatDialogModule,  
    MatButtonModule,
    MatButtonToggleModule
  } from '@angular/material';


  
@NgModule({
  declarations: [
 
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
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [   
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
