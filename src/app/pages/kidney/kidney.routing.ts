import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Kidney } from './kidney.component';

const routes: Routes = [
  {
    path: '',
    component: Kidney,
    children: [
      { path: 'general', component: Kidney },
      { path: 'cancer', component: Kidney },
      { path: 'inflammation', component: Kidney },
      { path: 'stones', component: Kidney },
      { path: 'cists', component: Kidney },
      { path: 'transplant', component: Kidney },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidneyRoutingModule { }
