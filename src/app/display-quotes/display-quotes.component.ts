import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-display-quotes',
  templateUrl: './display-quotes.component.html',
  styleUrls: ['./display-quotes.component.css']
})
export class DisplayQuotesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  quotes:Quote[] = [
    new Quote (1,'Everyone lives by selling something','Jessica','Robert Louis Stevenson'),

   new Quote(1,'I would rather regret the things I have done than regret the things I have not done.','Becky','Lucille Ball'),

   new Quote(1,'The key to life is accepting challenges. Once someone stops doing this, he is dead','Andrew','Bette Davis'),

    new Quote(1,'Formula for success: rise early, work hard, strike oil', 'Jamal','J. Paul Getty'),

    new Quote(1,'You can waste your lives drawing lines. Or you can live your life crossing them.','Shanice','Shonda Rhimes')
  
  ];
    
  addNewQuote(quotes: Quote){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength+1;
    this.quotes.push(quotes)
  }


ngOninit():void{

}
}

// type Quote = Array<{ about: string, name: string , aurthor:string}>;
