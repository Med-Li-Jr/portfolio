import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  @Input()
  quoteID: string = "first-quote"
  
  @Input()
  quoteMessage: string = "Learn what needs to be learned."

  

  constructor() { }

  ngOnInit(): void {
  }

}
