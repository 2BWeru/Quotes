import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-quotes',
  templateUrl: './form-quotes.component.html',
  styleUrls: ['./form-quotes.component.css']
})
export class FormQuotesComponent implements OnInit {
   place = 'Next'
  
 
  constructor() { }

  ngOnInit(): void {
  }

}
