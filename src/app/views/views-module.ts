import { NgModule } from '@angular/core';
import { LoginView } from './components/login-view/login-view';
import { CommonModule } from '../common/common.module';
import { LoadingView } from './components/loading-view/loading-view';
import { ProgramView } from './components/program-view/program-view';



@NgModule({
  declarations: [
    LoginView,
    LoadingView,
    ProgramView,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginView,
    LoadingView,
    ProgramView,
  ]
})
export class ViewsModule { }
