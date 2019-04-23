import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import HomeModule from './home/home.module';
import ContactModule from './contact/contact.module';
import TermsModule from './terms/terms.module';
import DataProtectionModule from './data-protection/data-protection.module';
import ImprintModule from './imprint/imprint.module';
import DeliverModule from './deliver/deliver.module';
import ReturnModule from './return/return.module';
import CategoriesModule from './categories/categories.module';
// import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'contact', loadChildren: () => ContactModule },
  { path: 'terms', loadChildren: () => TermsModule },
  { path: 'data-protection', loadChildren: () => DataProtectionModule },
  { path: 'imprint', loadChildren: () => ImprintModule },
  { path: 'deliver', loadChildren: () => DeliverModule },
  { path: 'return', loadChildren: () => ReturnModule },
  { path: 'category', loadChildren: () => CategoriesModule },
  { path: 'categories', loadChildren: () => CategoriesModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
