import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CartItem } from '../mock-data/cart-item';
import { COMPUTERS,MOUSE,TABLETS } from '../mock-data/mock-items';
import { HttpService } from './http.service';
 
@Injectable()
export class DataService {
    items: CartItem[];
    private cart = new BehaviorSubject<Array<CartItem>>([]);
    cartItem = this.cart.asObservable();
    data: CartItem[];
 
    constructor(private _http: HttpService) { }

    callCategory(param): Observable<CartItem[]>{
      switch(param){
        case 'computers': return this.getComputers();
        case 'tablets': return this.getTablets();   
        case 'mouse': return this.getMice();  
      }
    }
 
    getComputers(): Observable<CartItem[]> {
      return this._http.get('../../assets/data/','computers.json');
    }

    getTablets(): Observable<CartItem[]> {
      return Observable.of(TABLETS);
    }
    
    getCartItems(): Observable<CartItem[]> {
      return Observable.of(this.cart.getValue());
    }

    getMice(): Observable<CartItem[]> {
      return Observable.of(MOUSE);
    }


    addToCart(item): Array<CartItem> {
      this.cart.getValue().push(item);
      return this.cart.getValue();
    }

    removeToCart(index): Array<CartItem> {
      this.cart.getValue().splice(index, 1);
      return this.cart.getValue();
    }
    
 
}