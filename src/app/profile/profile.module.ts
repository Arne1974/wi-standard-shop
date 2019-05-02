import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import profileRoutes from './profile.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    profileRoutes,
    TranslateModule
  ]
})
export default class ProfileModule { }
