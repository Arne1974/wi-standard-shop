import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import contactRoutes from './contact.routes';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    contactRoutes
  ]
})
export default class ContactModule { }
