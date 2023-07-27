import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CobranzasComponent } from './cobranzas/cobranzas.component';

const routes: Routes = [
  {
    path: '',
    component:CobranzasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CobranzasRoutingModule { }
