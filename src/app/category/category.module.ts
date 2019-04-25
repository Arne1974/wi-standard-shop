import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import categoryRoutes from './category.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    TranslateModule,
    categoryRoutes
  ]
})
export default class CategoryModule { }
