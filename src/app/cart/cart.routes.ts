import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';

const routes = [
    { path: '', component: CartComponent }
];

export default RouterModule.forChild(routes);
