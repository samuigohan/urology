import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Testis } from './testis.component';

const routes: Routes = [
  {
    path: '',
    component: Testis,
    children: [
      { path: 'general', component: Testis },
      { path: 'cancer', component: Testis },
      { path: 'inflammation', component: Testis },
      { path: 'hydrocele', component: Testis },
      { path: 'varicocele', component: Testis },
      { path: 'torsion', component: Testis },
      { path: 'infertility', component: Testis },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestisRoutingModule { }
