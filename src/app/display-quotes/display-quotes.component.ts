import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-display-quotes',
  templateUrl: './display-quotes.component.html',
  styleUrls: ['./display-quotes.component.css']
})
export class DisplayQuotesComponent implements OnInit {

  ngOnInit(): void {
   
  }
 
  quotes:Quote[] = [
     {id: 3, about: 'I would rather regret the things I have done than regret the things I have not done.', name: 'Becky', aurthor: 'Lucille Ball'},

     {id:2, about: 'Everyone lives by selling something' ,name : 'Jessica', aurthor: 'Robert Louis Stevenson' },

     {id: 3, about: 'The key to life is accepting challenges. Once someone stops doing this, he is dead', name: 'Andrew', aurthor: 'Bette Davis' },

     {id: 4, about: 'Formula for success: rise early, work hard, strike oil', name: 'Jamal', aurthor: 'J. Paul Getty'},

     {id: 5, about: 'You can waste your lives drawing lines. Or you can live your life crossing them.', name: 'Shanice', aurthor: 'Shonda Rhimes' }
  
  ];
    
  addNewQuote(quotes: Quote){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength+1;
    this.quotes.push(quotes);
    let toAdd = confirm(`\n Quote added Successfully !!\n Check it out`);

  }

  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);
    
      if (toDelete){
        this.quotes.splice(index,1);
      
    }
  }
  }


ngOninit():void{

}
}

// type Quote = Array<{ about: string, name: string , aurthor:string}>;
