import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { MatDialogModule, MatCardModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';
import { CardItemComponent } from '../card-item/card-item.component';


@NgModule({
  declarations: [
    CardItemComponent
  ],
  imports: [   
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [   
    FormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule ,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatCardModule
  ],
  entryComponents:[CardItemComponent],
  providers: [DataService, DialogService],
  bootstrap: []
})
export class CoreModule { }
