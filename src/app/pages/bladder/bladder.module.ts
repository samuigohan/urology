import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bladder } from './bladder.component';
import { BladderRoutingModule } from './bladder.routing';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  exports: [
    Bladder,
  ],
  declarations: [
    Bladder,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BladderRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,

  ]
})
export class BladderModule { }
