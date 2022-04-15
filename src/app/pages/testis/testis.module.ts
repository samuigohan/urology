import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testis } from './testis.component';
import { TestisRoutingModule } from './testis.routing';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  exports: [
    Testis,
  ],
  declarations: [
    Testis,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TestisRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,

  ]
})
export class TestisModule { }
