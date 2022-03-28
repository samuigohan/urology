import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
    declarations: [
        FaqComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [
    ],
    exports: [
        CommonModule,
        FaqComponent,
    ],
})
export class SharedModule { }
