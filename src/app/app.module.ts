import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LandingModule } from './pages/landing/landing.module';
import { KidneyModule } from './pages/kidney/kidney.module';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    KidneyModule,
  ],
  providers: [
    HttpClientModule,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
