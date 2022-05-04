import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionsMetadata } from 'src/app/section.metadata';
import { Testis } from './testis.component';

const routes: Routes = [
  {
    path: '',
    component: Testis,
    children: [
      { path: 'general', component: Testis, data: SectionsMetadata.testis.general },
      { path: 'cancer', component: Testis, data: SectionsMetadata.testis.cancer },
      { path: 'inflammation', component: Testis, data: SectionsMetadata.testis.inflammation },
      { path: 'hydrocele', component: Testis, data: SectionsMetadata.testis.hydrocele },
      { path: 'varicocele', component: Testis, data: SectionsMetadata.testis.varicocele },
      { path: 'torsion', component: Testis, data: SectionsMetadata.testis.torsion },
      { path: 'infertility', component: Testis, data: SectionsMetadata.testis.infertility },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestisRoutingModule { }
