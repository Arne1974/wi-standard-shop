import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoryComponent } from '../category/category.component';

const routes = [
    { path: '', component: CategoriesComponent },
    { path: 'id/:id', component: CategoryComponent }
];

export default RouterModule.forChild(routes);
