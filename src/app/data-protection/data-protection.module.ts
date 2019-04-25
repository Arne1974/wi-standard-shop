import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataProtectionComponent } from './data-protection.component';
import dataProtectionRoutes from './data-protection.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DataProtectionComponent],
  imports: [
    CommonModule,
    TranslateModule,
    dataProtectionRoutes
  ]
})
export default class DataProtectionModule { }
