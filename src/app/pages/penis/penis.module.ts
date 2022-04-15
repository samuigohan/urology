import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Penis } from './penis.component';
import { PenisRoutingModule } from './penis.routing';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  exports: [
    Penis,
  ],
  declarations: [
    Penis,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PenisRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,

  ]
})
export class PenisModule { }
