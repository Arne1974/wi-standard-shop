import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from './category';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  headline: string;
  category: any;

  constructor(
    private route: ActivatedRoute,
    @Inject('categories-service') private categoriesService
  ) { }

  ngOnInit() {
    this.headline = 'categories.' + this.getParamId();
    this.getCategory();
  }
  getParamId() {
    return this.route.snapshot.paramMap.get('id');
  }
  getCategory(): void {
    const id = this.getParamId();
    this.categoriesService.getCategory(id)
      .subscribe(items => items.map(
        item => this.category = _(item.translation)
      ));
  }
}
