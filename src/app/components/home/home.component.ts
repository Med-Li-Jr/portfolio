import { Component, OnInit } from '@angular/core';
import { myInfo } from 'src/app/modals/data-moacks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  coordInfo = myInfo
  constructor() { }

  ngOnInit(): void {
  }

}
