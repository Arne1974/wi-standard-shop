import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes = [
    { path: '', component: ProfileComponent }
];

export default RouterModule.forChild(routes);
