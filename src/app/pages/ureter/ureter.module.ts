import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ureter } from './ureter.component';
import { UreterRoutingModule } from './ureter.routing';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  exports: [
    Ureter,
  ],
  declarations: [
    Ureter,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UreterRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,

  ]
})
export class UreterModule { }
