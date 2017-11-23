import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DataService } from './data.service';
import { DialogService } from './dialog.service';

import { CardItemComponent } from '../card-item/card-item.component';
import { SharedModule } from '../shared/shared.module';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [

  ],
  imports: [   
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [ 
    BrowserModule,
    BrowserAnimationsModule ,
    SharedModule,
    HttpClientModule
  ],
  entryComponents:[CardItemComponent],
  providers: [DataService, DialogService,HttpService],
  bootstrap: []
})
export class CoreModule { }
