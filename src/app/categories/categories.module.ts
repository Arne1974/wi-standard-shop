import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoryComponent } from '../category/category.component';
import categoriesRoutes from './categories.routes';

@NgModule({
  declarations: [CategoriesComponent, CategoryComponent],
  imports: [
    CommonModule,
    categoriesRoutes
  ]
})
export default class CategoriesModule { }
