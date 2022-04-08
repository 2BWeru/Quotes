import { Component} from '@angular/core';
import { Quotes } from './quotes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Quotes by Wammy'

  //  quotes!: string[];

  //  constructor(){
  //    this.quotes = ['People often say that motivation doesnt', 'last Well neither does bathing', 'that is why we recommend it daily.' ,'Zig Ziglar']
  //  }
    quotes:Quotes[]=[
       {about:'Everyone lives by selling something', name:'Jessica', aurthor:'Robert Louis Stevenson'},
       {about: 'Hire character train skill' , name:'Lazzo' , aurthor:'Peter Schutz'},
       {about:'Beware of monotony; it is the mother of all the deadly sins.',name:'Isaac',aurthor:'Edith Wharton'},
       {about:'Without hustle, talent will only carry you so far.', name:'Brian', aurthor:'Gary Vaynerchuk'},
       {about:'I would rather regret the things I have done than regret the things I have not done.', name:'Becky', aurthor:'Lucille Ball'},
       {about:'The key to life is accepting challenges. Once someone stops doing this, he is dead', name:'Andrew', aurthor:'Bette Davis'},
       {about:'Formula for success: rise early, work hard, strike oil', name:'Jamal', aurthor:'J. Paul Getty'},
       {about:'You can waste your lives drawing lines. Or you can live your life crossing them.', name:'Shanice', aurthor:'Shonda Rhimes'}
    ];


  ngOnInit(): void {
  }
}
