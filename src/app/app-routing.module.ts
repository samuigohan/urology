import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Landing } from './pages/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: Landing,
  },
  {
    path: 'kidney',
    loadChildren: () => import( './pages/kidney/kidney.module').then(m => m.KidneyModule)
  },
  {
    path: 'urethra',
    loadChildren: () => import( './pages/urethra/urethra.module').then(m => m.UrethraModule)
  },
  {
    path: 'bladder',
    loadChildren: () => import( './pages/bladder/bladder.module').then(m => m.BladderModule)
  },
  {
    path: 'prostate',
    loadChildren: () => import( './pages/prostate/prostate.module').then(m => m.ProstateModule)
  },
  {
    path: 'testis',
    loadChildren: () => import( './pages/testis/testis.module').then(m => m.TestisModule)
  },
  {
    path: 'penis',
    loadChildren: () => import( './pages/penis/penis.module').then(m => m.PenisModule)
  },
  {
    path: 'ureter',
    loadChildren: () => import( './pages/ureter/ureter.module').then(m => m.UreterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
