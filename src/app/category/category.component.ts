import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  private id;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route
      .paramMap
      .pipe(switchMap(params => params.get('id') || 'None'));

  }

}
