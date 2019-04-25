import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms.component';
import termsRoutes from './terms.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [TermsComponent],
    imports: [CommonModule, TranslateModule, termsRoutes]
})
export default class TermsModule { }
