import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: '/cobranzas',
  },
  {
    path: 'cobranzas',
    canActivate:[ AuthGuard ],
    loadChildren: () => import('./cobranzas/cobranzas.module').then(m => m.CobranzasModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: '**',
    redirectTo:'/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
