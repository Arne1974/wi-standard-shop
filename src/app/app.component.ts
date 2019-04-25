import { Component, Inject } from '@angular/core';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject('translate') private translate
  ) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
  }
  messageBoxContent = _('messagebox.warning.text');
  useLanguage(language: string) {
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|de/) ? language : 'en');
  }
}
