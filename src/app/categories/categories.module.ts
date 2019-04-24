import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import categoriesRoutes from './categories.routes';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    categoriesRoutes
  ]
})
export default class CategoriesModule { }
