import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import HomeModule from './home/home.module';
import ContactModule from './contact/contact.module';
import TermsModule from './terms/terms.module';
import DataProtectionModule from './data-protection/data-protection.module';
import ImprintModule from './imprint/imprint.module';
import DeliverModule from './deliver/deliver.module';
import ReturnModule from './return/return.module';
import CategoryModule from './category/category.module';
import CategoriesModule from './categories/categories.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'contact', loadChildren: () => ContactModule },
  { path: 'terms', loadChildren: () => TermsModule },
  { path: 'data-protection', loadChildren: () => DataProtectionModule },
  { path: 'imprint', loadChildren: () => ImprintModule },
  { path: 'deliver', loadChildren: () => DeliverModule },
  { path: 'return', loadChildren: () => ReturnModule },
  { path: 'category', loadChildren: () => CategoryModule },
  { path: 'categories', loadChildren: () => CategoriesModule },
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' },
  { path: 'page-not-found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
