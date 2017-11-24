import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'as-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _data: DataService, private _router: Router) { }

  ngOnInit() {
  }

  shouldDisplayBackBtn(): boolean {
    return this._router.url != '/login' 
    && this._router.url != '/signup' 
    && this._router.url != '/dashboard' ;
  }

}
