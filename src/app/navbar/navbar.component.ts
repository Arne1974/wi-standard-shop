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
  navigation = [
    { url: '', context: 'Home' },
    { url: 'contact', context: 'Kontakt' },
    { url: 'terms', context: 'AGB' },
    { url: 'data-protection', context: 'Datenschutz' },
    { url: 'imprint', context: 'Impressum' },
    { url: 'deliver', context: 'Versandbedingungen' },
    { url: 'return', context: 'Rückgabebedingungen' },
    { url: 'category/id/1', context: 'Kategorie' },
    { url: 'categories', context: 'Kategorien' },
  ];

  ngOnInit() {
  }

}
