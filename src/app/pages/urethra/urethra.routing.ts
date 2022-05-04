import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionsMetadata } from 'src/app/section.metadata';
import { Urethra } from './urethra.component';

const routes: Routes = [
  {
    path: '',
    component: Urethra,
    children: [
      { path: 'general', component: Urethra, data: SectionsMetadata.urethra.general },
      { path: 'cancer', component: Urethra, data: SectionsMetadata.urethra.cancer },
      { path: 'stones', component: Urethra, data: SectionsMetadata.urethra.stones },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrethraRoutingModule { }
