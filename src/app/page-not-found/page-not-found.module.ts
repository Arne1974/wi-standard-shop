import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class PageNotFoundModule { }
