import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import homeRoutes from './home.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, homeRoutes, TranslateModule]
})
export default class HomeModule { }
