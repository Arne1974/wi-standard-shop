import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import articleRoutes from './article.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    articleRoutes,
    TranslateModule
  ]
})
export default class ArticleModule { }
