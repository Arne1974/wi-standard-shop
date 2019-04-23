import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
