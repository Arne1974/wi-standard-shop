import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';

const routes = [
    { path: '', component: CategoriesComponent }
];

export default RouterModule.forChild(routes);
