import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bladder } from './bladder.component';

const routes: Routes = [
  {
    path: '',
    component: Bladder,
    children: [
      { path: 'general', component: Bladder },
      { path: 'cancer', component: Bladder },
      { path: 'inflammation', component: Bladder },
      { path: 'stones', component: Bladder },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BladderRoutingModule { }
