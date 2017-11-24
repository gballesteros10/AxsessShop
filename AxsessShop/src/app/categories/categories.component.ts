import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/data.service';
import { CartItem } from '../mock-data/cart-item';
import { DialogService } from '../core/dialog.service';
import { Subscription } from 'rxjs/Subscription';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'as-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public items: CartItem[];
  
  private categoriesSubscription:Subscription;
  private dialogSubscription:Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private _data: DataService,
    private _dialog: DialogService) {
  }

  ngOnInit() {
     this.categoriesSubscription = this.route.params.flatMap(res => {
      return this._data.callCategory(res.id)}).subscribe(res => this.items = res);
  }

  ngOnDestroy() {
    if(this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe();
    }
    if(this.dialogSubscription){
      this.dialogSubscription.unsubscribe();
    }
  }

  public openDialog(item) {
    this.dialogSubscription = this._dialog.openDialogService(item).subscribe(res => {
      if (res) {
        console.log("I returned here");
        this._data.addToCart(res);
      }
    });
  }





}
