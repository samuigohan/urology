import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Penis } from './penis.component';

const routes: Routes = [
  {
    path: '',
    component: Penis,
    children: [
      { path: 'general', component: Penis },
      { path: 'cancer', component: Penis },
      { path: 'phimosis', component: Penis },
      { path: 'frenulum', component: Penis },
      { path: 'induratio', component: Penis },
      { path: 'disfunction', component: Penis },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenisRoutingModule { }
