import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories$;
  constructor(
    @Inject('categories-service') private categoriesService
  ) { }

  ngOnInit() {
    this.categories$ = this.categoriesService.fetchCategories();
  }
}
