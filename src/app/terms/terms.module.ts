import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms.component';
import termsRoutes from './terms.routes';

@NgModule({
    declarations: [TermsComponent],
    imports: [CommonModule, termsRoutes]
})
export default class TermsModule { }
