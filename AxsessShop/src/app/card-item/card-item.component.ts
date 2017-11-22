import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'as-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  constructor(
    public thisDialogRef: MatDialogRef<CardItemComponent>,
     @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

 addItemToCart(cartItem){
   this.data = cartItem;
   this.thisDialogRef.close(cartItem);
 }

  onNoClick(): void {
    this.thisDialogRef.close();
  }



}
