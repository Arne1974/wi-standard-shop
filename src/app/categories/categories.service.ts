import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesService {
  constructor(
    private http: HttpClient
  ) { }
  fetchCategories() {
    // tslint:disable-next-line:max-line-length
    // const getUrl = 'https://athene.wizard.gmbh/api/v2/listing/category?token=ea23e17f-5066-4325-9f45-6a42535a6209&cryptedEmailHex=a2784912ba9e532711b34845a2aabedb45be72ceaba03cbfcfe7a7f924e50bd3&take=15&drop=0';
    const getUrl = '../../assets/data/categories.json';
    return this.http.get(getUrl);
  }
}
