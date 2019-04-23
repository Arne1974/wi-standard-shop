import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImprintComponent } from './imprint.component';
import imprintRoutes from './imprint.routes';

@NgModule({
  declarations: [ImprintComponent],
  imports: [
    CommonModule,
    imprintRoutes
  ]
})
export default class ImprintModule { }
