import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  headline: string;
  constructor(
    private route: ActivatedRoute,
    @Inject('categories-service') private categoriesService
  ) {}

  ngOnInit() {
    this.headline = 'categories.' + this.getCategory();
  }
  getCategory(): string {
    return this.route.snapshot.paramMap.get('id') || 'None';
  }
}
