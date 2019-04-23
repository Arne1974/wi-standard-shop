import { RouterModule } from '@angular/router';
import { TermsComponent } from './terms.component';

const routes = [
    { path: '', component: TermsComponent }
];

export default RouterModule.forChild(routes);
