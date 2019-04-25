import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverComponent } from './deliver.component';
import deliverRoutes from './deliver.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DeliverComponent],
  imports: [
    CommonModule,
    TranslateModule,
    deliverRoutes
  ]
})
export default class DeliverModule { }
