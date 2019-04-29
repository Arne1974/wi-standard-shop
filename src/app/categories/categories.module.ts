import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import categoriesRoutes from './categories.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    categoriesRoutes,
    TranslateModule
  ]
})
export default class CategoriesModule { }
