import { Component } from '@angular/core';
import { DataService } from './core/data.service';

@Component({
  selector: 'as-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'as';

  constructor(public _data:DataService){
    
  }
}
