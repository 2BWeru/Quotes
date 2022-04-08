import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormQuotesComponent } from './form-quotes/form-quotes.component';
import { DisplayQuotesComponent } from './display-quotes/display-quotes.component';
import { DisplayContentComponent } from './display-content/display-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FormQuotesComponent,
    DisplayQuotesComponent,
    DisplayContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
