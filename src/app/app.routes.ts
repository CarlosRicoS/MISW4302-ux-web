import { Routes } from '@angular/router';
import { LoginView } from './views/components/login-view/login-view';
import { LoadingView } from './views/components/loading-view/loading-view';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginView
  },
  {
    path: 'loading',
    component: LoadingView
  }
];
