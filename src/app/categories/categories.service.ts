import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, filter, map } from 'rxjs/operators';
import { Observable, of, pipe } from 'rxjs';

import { Category } from '../category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  // getCategoriesUrl = 'https://athene.wizard.gmbh/api/v2/listing/category';
  private getCategoriesUrl = '../../assets/data/categories.json';

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<Category[]> {
    // tslint:disable-next-line:max-line-length
    // const getUrl = 'https://athene.wizard.gmbh/api/v2/listing/category?token=ea23e17f-5066-4325-9f45-6a42535a6209&cryptedEmailHex=a2784912ba9e532711b34845a2aabedb45be72ceaba03cbfcfe7a7f924e50bd3&take=15&drop=0';
    return this.http.get<Category[]>(this.getCategoriesUrl)
      .pipe(
        tap(_ => console.log('Fetched categories'))
      );
  }
  getCategory(id: string): Observable<Category> {
    return this.getCategories().pipe(
      map((items: any) => items.filter(
        item => item.id === id
      )),
      tap(_ => console.log('Resolving Category:', _))
    );
  }
}
