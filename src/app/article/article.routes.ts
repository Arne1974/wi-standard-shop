import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';

const routes = [
    { path: '', redirectTo: '/page-not-found', pathMatch: 'full' },
    { path: 'id', redirectTo: '/page-not-found', pathMatch: 'full' },
    { path: 'id/:id', component: ArticleComponent }
];

export default RouterModule.forChild(routes);
