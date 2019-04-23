import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataProtectionComponent } from './data-protection.component';
import dataProtectionRoutes from './data-protection.routes';

@NgModule({
  declarations: [DataProtectionComponent],
  imports: [
    CommonModule,
    dataProtectionRoutes
  ]
})
export default class DataProtectionModule { }
