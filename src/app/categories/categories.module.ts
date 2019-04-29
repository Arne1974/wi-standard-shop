import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import categoriesRoutes from './categories.routes';
import { TranslateModule } from '@ngx-translate/core';
import { CategoriesService } from './categories.service';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    categoriesRoutes,
    TranslateModule
  ],
  providers:    [{
    provide: 'categories-service',
    useClass: CategoriesService
  }],
  exports:      [CategoriesComponent]
})
export default class CategoriesModule { }
