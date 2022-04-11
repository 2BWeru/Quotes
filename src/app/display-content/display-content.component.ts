import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.css']
})
export class DisplayContentComponent implements OnInit {
 
  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  count=0;

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }
  

  

  ngOnInit(): void {
  }


}
