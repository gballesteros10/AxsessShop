import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/data.service';
import { CartItem } from '../mock-data/cart-item';
import { DialogService } from '../core/dialog.service';

@Component({
  selector: 'as-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public param: string;
  public items: CartItem[];
  public categoryName: string = 'tablets';
  public popupResponse: any;
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      username: {
        title: 'Image'
      }
    }
  };

  constructor(private route: ActivatedRoute,
    private router: Router,
    public _data: DataService,
    public _dialog: DialogService) {
    this.route.params.subscribe(res => console.log('id: ', res.id));

  }

  ngOnInit() {

    this.route.params.subscribe(res => {
      this.param = res.id;
      this._data.callCategory(this.param).subscribe(res => this.items = res);

    });

  }

  public openDialog(item) {
    this._dialog.openDialogService(item).subscribe(res => {
      if (res) {
        console.log("I returned here");
        this._data.addToCart(res);
      }
    });
  }





}
