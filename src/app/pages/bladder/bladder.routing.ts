import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bladder } from './bladder.component';
import { SectionsMetadata } from 'src/app/section.metadata';

const routes: Routes = [
  {
    path: '',
    component: Bladder,
    children: [
      { path: 'general', component: Bladder, data: SectionsMetadata.bladder.general },
      { path: 'cancer', component: Bladder, data: SectionsMetadata.bladder.cancer },
      { path: 'inflammation', component: Bladder, data: SectionsMetadata.bladder.inflammation },
      { path: 'stones', component: Bladder, data: SectionsMetadata.bladder.stones },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BladderRoutingModule { }
