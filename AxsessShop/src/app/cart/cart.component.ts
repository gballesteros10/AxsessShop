import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { CartItem } from '../mock-data/cart-item';
import { DialogService } from '../core/dialog.service';

@Component({
  selector: 'as-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: CartItem[];
  constructor(public _data: DataService, public _dialog: DialogService) { }

  ngOnInit() {
    this._data.getCartItems().subscribe(res => {
      this.items = res;
    });
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
