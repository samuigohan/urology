import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionsMetadata } from 'src/app/section.metadata';
import { Penis } from './penis.component';

const routes: Routes = [
  {
    path: '',
    component: Penis,
    children: [
      { path: 'general', component: Penis, data: SectionsMetadata.penis.general },
      { path: 'cancer', component: Penis, data: SectionsMetadata.penis.cancer },
      { path: 'phimosis', component: Penis, data: SectionsMetadata.penis.phimosis },
      { path: 'frenulum', component: Penis, data: SectionsMetadata.penis.frenulum },
      { path: 'induratio', component: Penis, data: SectionsMetadata.penis.induratio },
      { path: 'disfunction', component: Penis, data: SectionsMetadata.penis.disfunction },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenisRoutingModule { }
