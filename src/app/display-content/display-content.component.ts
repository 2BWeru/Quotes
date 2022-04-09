import { Component, OnInit,Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.css']
})
export class DisplayContentComponent implements OnInit {

  @Input() quote!: Quote;
  constructor() { }

  ngOnInit(): void {
  }


}
