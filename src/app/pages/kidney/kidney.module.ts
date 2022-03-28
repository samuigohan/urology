import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kidney } from './kidney.component';
import { KidneyRoutingModule } from './kidney.routing';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  exports: [
    Kidney,
  ],
  declarations: [
    Kidney,
  ],
  imports: [
    CommonModule,
    SharedModule,
    KidneyRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,

  ]
})
export class KidneyModule { }
