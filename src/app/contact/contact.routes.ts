import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes = [
    { path: '', component: ContactComponent }
];

export default RouterModule.forChild(routes);
