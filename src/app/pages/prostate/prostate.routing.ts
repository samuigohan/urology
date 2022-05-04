import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionsMetadata } from 'src/app/section.metadata';
import { Prostate } from './prostate.component';

const routes: Routes = [
  {
    path: '',
    component: Prostate,
    children: [
      { path: 'general', component: Prostate, data: SectionsMetadata.prostate.general },
      { path: 'cancer', component: Prostate, data: SectionsMetadata.prostate.cancer },
      { path: 'inflammation', component: Prostate, data: SectionsMetadata.prostate.inflammation },
      { path: 'enlargement', component: Prostate, data: SectionsMetadata.prostate.enlargement },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProstateRoutingModule { }
