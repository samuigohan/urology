import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ureter } from './ureter.component';

const routes: Routes = [
  {
    path: '',
    component: Ureter,
    children: [
      { path: 'general', component: Ureter },
      { path: 'cancer', component: Ureter },
      { path: 'inflammation', component: Ureter },
      { path: 'constriction', component: Ureter },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UreterRoutingModule { }
