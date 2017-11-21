import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'as-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Axsess Shop';

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    // this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    if (isNullOrUndefined(localStorage.getItem("user"))) {
      // alert('Will redirect to login...');
      this._router.navigate(['/login']);
    }
  }
}
