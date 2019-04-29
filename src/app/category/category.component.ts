import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  catId: string;
  constructor(
    private route: ActivatedRoute,
    @Inject('categories-service') private categoriesService
  ) {}

  ngOnInit() {
    this.catId = this.getCategory();
  }
  getCategory(): string {
    return this.route.snapshot.paramMap.get('id') || 'None';
  }
}
