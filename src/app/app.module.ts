import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormQuotesComponent } from './form-quotes/form-quotes.component';
import { DisplayQuotesComponent } from './display-quotes/display-quotes.component';
import { DisplayContentComponent } from './display-content/display-content.component';
import { FormsModule } from '@angular/forms';
import { VotesDirective } from './votes.directive';
import { TimeCountPipe } from './time-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormQuotesComponent,
    DisplayQuotesComponent,
    DisplayContentComponent,
    VotesDirective,
    TimeCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
