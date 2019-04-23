import { RouterModule } from '@angular/router';
import { ImprintComponent } from './imprint.component';

const routes = [
    { path: '', component: ImprintComponent }
];

export default RouterModule.forChild(routes);
