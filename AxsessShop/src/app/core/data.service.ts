import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CartItem } from '../mock-data/cart-item';
import { COMPUTERS,KEYBOARDS,MOUSE,PHONES,TABLETS } from '../mock-data/mock-items';
 
@Injectable()
export class DataService {
    items: CartItem[];
    private cart = new BehaviorSubject<Array<CartItem>>([]);
    cartItem = this.cart.asObservable();
 
    constructor() { }

    callCategory(param): Observable<CartItem[]>{
      switch(param){
        case 'computers': return this.getComputers();
        case 'tablets': return this.getComputers();   
      }
    }
 
    getComputers(): Observable<CartItem[]> {
      return Observable.of(COMPUTERS);
    }

    getTablets(): Observable<CartItem[]> {
      return Observable.of(TABLETS);
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