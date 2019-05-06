import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { TranslateService } from '@ngx-translate/core';
import { CategoriesService } from './categories/categories.service';
import { CartService } from './cart/cart.service';
import { ArticleService } from './article/article.service';
import { ProfileService } from './profile/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    NgbCollapseModule,

    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
    })
  ],
  providers: [
    {
      provide: 'translate',
      useClass: TranslateService
    },
    {
      provide: 'categories-service',
      useClass: CategoriesService
    },
    {
      provide: 'cart-service',
      useClass: CartService
    },
    {
      provide: 'article-service',
      useClass: ArticleService
    },
    {
      provide: 'profile-service',
      useClass: ProfileService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
