import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';

const routes = [
    { path: '', redirectTo: '/categories', pathMatch: 'full' },
    { path: 'id', redirectTo: '/categories', pathMatch: 'full' },
    { path: 'id/:id', component: CategoryComponent }
];

export default RouterModule.forChild(routes);
