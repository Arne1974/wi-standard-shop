import { RouterModule } from '@angular/router';
import { DataProtectionComponent } from './data-protection.component';

const routes = [
    { path: '', component: DataProtectionComponent }
];

export default RouterModule.forChild(routes);
