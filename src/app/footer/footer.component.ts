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
    { url: '', translation: _('footer.navigation.home') },
    { url: 'contact', translation: _('footer.navigation.contact') },
    { url: 'terms', translation: _('footer.navigation.terms') },
    { url: 'data-protection', translation: _('footer.navigation.data-protection') },
    { url: 'imprint', translation: _('footer.navigation.imprint') },
    { url: 'deliver', translation: _('footer.navigation.deliver') },
    { url: 'return', translation: _('footer.navigation.return') },
    { url: 'categories', translation: _('footer.navigation.categories') },
  ];

  ngOnInit() {
  }

}
