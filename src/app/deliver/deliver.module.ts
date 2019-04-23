import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverComponent } from './deliver.component';
import deliverRoutes from './deliver.routes';

@NgModule({
  declarations: [DeliverComponent],
  imports: [
    CommonModule,
    deliverRoutes
  ]
})
export default class DeliverModule { }
