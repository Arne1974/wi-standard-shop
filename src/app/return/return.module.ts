import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnComponent } from './return.component';
import returnRoutes from './return.routes';

@NgModule({
  declarations: [ReturnComponent],
  imports: [
    CommonModule,
    returnRoutes
  ]
})
export default class ReturnModule { }
