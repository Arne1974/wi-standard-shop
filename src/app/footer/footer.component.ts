import { Component, OnInit } from '@angular/core';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  footerNavigation = [
    { url: '', context: 'Home' },
    { url: 'contact', context: 'Kontakt' },
    { url: 'terms', context: 'AGB' },
    { url: 'data-protection', context: 'Datenschutz' },
    { url: 'imprint', context: 'Impressum' },
    { url: 'deliver', context: 'Versandbedingungen' },
    { url: 'return', context: 'Rückgabebedingungen' },
    { url: 'categories', context: 'Kategorien' },
  ];
  messageBoxContent = _('messagebox.success.text');
  ngOnInit() {
  }

}
