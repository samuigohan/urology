import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Urethra } from './urethra.component';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { UrethraRoutingModule } from './urethra.routing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  exports: [ Urethra, ],
  declarations: [
    Urethra,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UrethraRoutingModule,
    HttpClientModule,
  ]
})
export class UrethraModule { }
