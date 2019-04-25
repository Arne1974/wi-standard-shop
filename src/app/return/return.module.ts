import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnComponent } from './return.component';
import returnRoutes from './return.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ReturnComponent],
  imports: [
    CommonModule,
    TranslateModule,
    returnRoutes
  ]
})
export default class ReturnModule { }
