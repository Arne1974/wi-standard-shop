import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  headline: string;
  constructor(
    private route: ActivatedRoute,
    @Inject('categories-service') private categoriesService,
    @Inject('article-service') private articleService
  ) { }

  ngOnInit() {
    this.headline = 'article.' + this.getArticle();
  }
  getArticle(): string {
    return this.route.snapshot.paramMap.get('id') || 'None';
  }
}
