import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prostate } from './prostate.component';
import { ProstateRoutingModule } from './prostate.routing';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  exports: [
    Prostate,
  ],
  declarations: [
    Prostate,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProstateRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,

  ]
})
export class ProstateModule { }
