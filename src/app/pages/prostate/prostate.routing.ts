import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Prostate } from './prostate.component';

const routes: Routes = [
  {
    path: '',
    component: Prostate,
    children: [
      { path: 'general', component: Prostate },
      { path: 'cancer', component: Prostate },
      { path: 'inflammation', component: Prostate },
      { path: 'enlargement', component: Prostate },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProstateRoutingModule { }
