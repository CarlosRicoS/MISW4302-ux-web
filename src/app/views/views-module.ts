import { NgModule } from '@angular/core';
import { LoginView } from './components/login-view/login-view';
import { CommonModule } from '../common/common.module';
import { LoadingView } from './components/loading-view/loading-view';



@NgModule({
  declarations: [
    LoginView,
    LoadingView,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginView,
    LoadingView,
  ]
})
export class ViewsModule { }
