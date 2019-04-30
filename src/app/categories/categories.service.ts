import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable()
export class CategoriesService {
  getUrl = '../../assets/data/categories.json';
  constructor(
    private http: HttpClient
  ) { }
  getCategories() {
    // tslint:disable-next-line:max-line-length
    // const getUrl = 'https://athene.wizard.gmbh/api/v2/listing/category?token=ea23e17f-5066-4325-9f45-6a42535a6209&cryptedEmailHex=a2784912ba9e532711b34845a2aabedb45be72ceaba03cbfcfe7a7f924e50bd3&take=15&drop=0';
    return this.http.get(this.getUrl);
  }
}
