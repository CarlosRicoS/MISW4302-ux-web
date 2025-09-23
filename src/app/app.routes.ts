import { Routes } from '@angular/router';
import { LoginView } from './views/components/login-view/login-view';
import { LoadingView } from './views/components/loading-view/loading-view';
import { ProgramView } from './views/components/program-view/program-view';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginView
  },
  {
    path: 'loading',
    component: LoadingView
  },
  {
    path: 'program',
    component: ProgramView
  }
];
