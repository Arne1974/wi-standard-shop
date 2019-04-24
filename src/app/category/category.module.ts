import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import categoryRoutes from './category.routes';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    categoryRoutes
  ]
})
export default class CategoryModule { }
