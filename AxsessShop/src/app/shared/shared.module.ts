import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
    MatTableModule, 
    MatGridListModule,
    MatCardModule,
    MatDialogModule,  
    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  } from '@angular/material';


  
@NgModule({
  declarations: [
 
  ],
  imports: [   
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    CommonModule,
  ],
  exports: [   
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
