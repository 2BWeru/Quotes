import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes by Wammy'

   quotes!: string[];

   constructor(){
     this.quotes = ['People often say that motivation doesnt', 'last Well neither does bathing', 'that is why we recommend it daily.' ,'Zig Ziglar']
   }
}
