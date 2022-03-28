import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Urethra } from './urethra.component';

const routes: Routes = [
  {
    path: '',
    component: Urethra,
    children: [
      { path: 'general', component: Urethra },
      { path: 'cancer', component: Urethra },
      { path: 'stones', component: Urethra },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrethraRoutingModule { }
