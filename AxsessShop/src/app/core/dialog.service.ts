import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';

import { CartItem } from '../mock-data/cart-item';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CardItemComponent } from '../card-item/card-item.component';

@Injectable()
export class DialogService {

    constructor(private dialog: MatDialog) { }

    openDialogService(itemObj): Observable<CartItem> {
        let dialogOpen: MatDialogRef<CardItemComponent>;
        dialogOpen = this.dialog.open(CardItemComponent, {
            width: '500px',
            height: '500px',
            data: itemObj
        });

        return dialogOpen.afterClosed().flatMap(result => {
            let cartItem: CartItem = result || null;
            console.log("Dialog Closed with values:", cartItem);
            return Observable.of(cartItem);
        });
    }
}