import { RouterModule } from '@angular/router';
import { ReturnComponent } from './return.component';

const routes = [
    { path: '', component: ReturnComponent }
];

export default RouterModule.forChild(routes);
