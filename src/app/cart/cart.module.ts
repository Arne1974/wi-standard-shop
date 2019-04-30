import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import cartRoutes from './cart.routes';
import { TranslateModule } from '@ngx-translate/core';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    TranslateModule,
    cartRoutes
  ]
})
export default class CartModule { }
