import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ResponseDetailsComponent } from './response-details/response-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
 {
  path: '',
  component: ContactDetailsComponent
 },
 {
   path: 'payment',
   component: PaymentDetailsComponent
 },
 {
   path: 'response',
   component: ResponseDetailsComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
