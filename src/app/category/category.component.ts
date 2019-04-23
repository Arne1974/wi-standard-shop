import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { map } from 'node_modules/rxjs/operators';
// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  private id;
  constructor(private route: ActivatedRoute) {
    // this.id = this.route.params.map((p: any) => p.id);
  }

  ngOnInit() {
    this.id = this.route
      .queryParamMap
      .pipe(map(params => params.get('id') || 'None'));
  }

}
