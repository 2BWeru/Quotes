import { Component} from '@angular/core';
import { Quote } from './quote';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Quotes by Wammy'
  quotes: any;

  ngOnInit(): void {
  }
  addNewQuote(quotes: Quote){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength+1;
    this.quotes.push(quotes)
  }
  
 
 
}
