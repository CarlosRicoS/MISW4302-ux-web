import { NgModule } from '@angular/core';
import { LoginView } from './components/login-view/login-view';
import { CommonModule } from '../common/common.module';



@NgModule({
  declarations: [
    LoginView,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginView,
  ]
})
export class ViewsModule { }
