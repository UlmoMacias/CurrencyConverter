import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { exchangeApiService } from "./_services/exchangeapi.service";
import { DivisaComponent } from './components/divisa/divisa.component';

@NgModule({
  declarations: [
    AppComponent,
    DivisaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [exchangeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
