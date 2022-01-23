import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kidney } from './kidney.component';
import { KidneyRoutingModule } from './kidney.routing';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [
    Kidney,
  ],
  declarations: [
    Kidney,
    FaqComponent,
  ],
  imports: [
    CommonModule,
    KidneyRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,

  ]
})
export class KidneyModule { }
