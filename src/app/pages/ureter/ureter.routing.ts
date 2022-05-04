import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionsMetadata } from 'src/app/section.metadata';
import { Ureter } from './ureter.component';

const routes: Routes = [
  {
    path: '',
    component: Ureter,
    children: [
      { path: 'general', component: Ureter, data: SectionsMetadata.ureter.general },
      { path: 'cancer', component: Ureter, data: SectionsMetadata.ureter.cancer },
      { path: 'inflammation', component: Ureter, data: SectionsMetadata.ureter.inflammation },
      { path: 'constriction', component: Ureter, data: SectionsMetadata.ureter.constriction },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UreterRoutingModule { }
