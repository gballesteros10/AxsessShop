import { Component } from '@angular/core';
import { DataService } from './core/data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'as-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
    
export class AppComponent implements OnInit {
  title = 'Axsess Shop';

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.checkIfLoggedIn();
  }

  shouldDisplayNav(): boolean {
    return this._router.url != '/login' && this._router.url != '/signup';
  }

  checkIfLoggedIn() {
    const userJson = localStorage.getItem("user");
    if (userJson == null || userJson == undefined) {
      console.log('Will redirect to login...');
      this._router.navigate(['/login']);
    }
  }

}