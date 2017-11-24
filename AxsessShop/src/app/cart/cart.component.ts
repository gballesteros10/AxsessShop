import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../core/data.service';
import { CartItem } from '../mock-data/cart-item';
import { DialogService } from '../core/dialog.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'as-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItemSubscription: Subscription;
  public items: CartItem[];
  constructor(public _data: DataService, public _dialog: DialogService) { }

  ngOnInit() {
    this.cartItemSubscription = this._data.getCartItems()
    .subscribe(res =>this.items = res);
  }

  ngOnDestroy(){
    if(this.cartItemSubscription){
      this.cartItemSubscription.unsubscribe()
    }
  }

  public openDialog(item) {
    this._dialog.openDialogService(item).subscribe(res => {
      if (res) {
        this._data.addToCart(res);
      }
    });
  }

  public removeToCart(index) {
    this._data.removeToCart(index);
  }

  getTotal(): number {
    return this.items.reduce(function (sum, item) {return sum + item.price; }, 0);
  }

}
