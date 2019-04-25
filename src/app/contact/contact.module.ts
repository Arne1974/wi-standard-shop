import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import contactRoutes from './contact.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    TranslateModule,
    contactRoutes
  ]
})
export default class ContactModule { }
