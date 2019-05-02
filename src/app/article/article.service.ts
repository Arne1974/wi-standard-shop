import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  getArticleUrl = 'https://athene.wizard.gmbh/api/v2/details/article/generic';

  constructor(
    private http: HttpClient
  ) { }
  getArticleByArticleId(id: string) {
    return;
  }
}
