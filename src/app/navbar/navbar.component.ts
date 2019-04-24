import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isNavbarCollapsed = true;
  title = 'wizard-shop-standard';
  headerNavigation = [
    { url: '', context: 'Home' },
    { url: 'categories', context: 'Kategorien' },
  ];

  ngOnInit() {
  }

}
