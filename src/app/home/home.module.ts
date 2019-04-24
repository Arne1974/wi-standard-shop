import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import homeRoutes from './home.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, homeRoutes]
})
export default class HomeModule {}
