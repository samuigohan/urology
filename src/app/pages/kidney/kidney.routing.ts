import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Kidney } from './kidney.component';

const routes: Routes = [
  {
    path: '',
    component: Kidney,
    children: [
      { path: 'anatomy', component: Kidney },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidneyRoutingModule { }
