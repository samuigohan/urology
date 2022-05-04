import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Kidney } from './kidney.component';
import { SectionsMetadata } from 'src/app/section.metadata';

const routes: Routes = [
  {
    path: '',
    component: Kidney,
    children: [
      { path: 'general', component: Kidney, data: SectionsMetadata.kidney.general },
      { path: 'cancer', component: Kidney, data: SectionsMetadata.kidney.cancer },
      { path: 'inflammation', component: Kidney, data: SectionsMetadata.kidney.inflammation },
      { path: 'stones', component: Kidney, data: SectionsMetadata.kidney.stones },
      { path: 'cists', component: Kidney, data: SectionsMetadata.kidney.cists },
      { path: 'transplant', component: Kidney, data: SectionsMetadata.kidney.transplant },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidneyRoutingModule { }
