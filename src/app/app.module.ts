import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormQuotesComponent } from './form-quotes/form-quotes.component';
import { DisplayQuotesComponent } from './display-quotes/display-quotes.component';
import { DisplayContentComponent } from './display-content/display-content.component';
import { FormsModule } from '@angular/forms';
import { VotesDirective } from './votes.directive';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    FormQuotesComponent,
    DisplayQuotesComponent,
    DisplayContentComponent,
    VotesDirective,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'form' , component:FormQuotesComponent,
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
