import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Landing } from './landing.component';
import { SvgDirective } from 'src/app/directives/svg.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Landing,
    SvgDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    Landing,
  ]
})
export class LandingModule { }
