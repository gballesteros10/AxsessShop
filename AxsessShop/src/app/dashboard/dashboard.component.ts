import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../core/data.service';


@Component({
  selector: 'as-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  categories: Array<Object> = [
    {    Id: 1, Name: "Computers", Class: "purple"  },
    {    Id: 2, Name: "Tablets", Class: "blue"   },
    {    Id: 3, Name: "Phones", Class: "red"   },
    {    Id: 4, Name: "Mouse", Class: "orange"   },
    {    Id: 5, Name: "Keyboards" , Class: "green"  }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(routeTxt:string){
    console.log('categories/' ,routeTxt.toLowerCase());
    this.router.navigate(['/categories',routeTxt.toLowerCase()]);
  }

}
