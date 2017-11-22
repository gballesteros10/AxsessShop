import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DataService } from './data.service';
import { DialogService } from './dialog.service';

import { CardItemComponent } from '../card-item/card-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CardItemComponent
  ],
  imports: [   
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  exports: [ 

    BrowserModule,
    BrowserAnimationsModule ,
    SharedModule

  ],
  entryComponents:[CardItemComponent],
  providers: [DataService, DialogService],
  bootstrap: []
})
export class CoreModule { }
