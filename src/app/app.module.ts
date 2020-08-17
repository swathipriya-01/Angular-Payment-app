import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ResponseDetailsComponent } from './response-details/response-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    PaymentDetailsComponent,
    ResponseDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
