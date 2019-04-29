import { Component, OnInit, Inject } from '@angular/core';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  categories$;
  constructor(
    @Inject('translate') private translate,
    @Inject('categories-service') private categoriesService
  ) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
   }

  isNavbarCollapsed = true;
  title = 'wizard-shop-standard';
  headerNavigation = [
    { url: '', context: 'Home' },
    { url: 'categories', context: 'Kategorien' },
  ];

  ngOnInit() {
    this.categories$ = this.categoriesService.getCategories();
  }
  useLanguage(language: string) {
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|de/) ? language : 'en');
  }
}
