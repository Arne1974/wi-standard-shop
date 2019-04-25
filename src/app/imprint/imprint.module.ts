import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImprintComponent } from './imprint.component';
import imprintRoutes from './imprint.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ImprintComponent],
  imports: [
    CommonModule,
    TranslateModule,
    imprintRoutes
  ]
})
export default class ImprintModule { }
