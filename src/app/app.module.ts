import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturesComponent } from './factures/factures.component';
import { FactureCreateComponent } from './factures/facture-create/facture-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturesComponent,
    FactureCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
