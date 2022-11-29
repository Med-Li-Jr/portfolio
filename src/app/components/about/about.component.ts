import { Component, OnInit } from '@angular/core';
import { myInfo } from 'src/app/modals/data-moacks';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  coordInfo = myInfo
  constructor() { }

  ngOnInit(): void {
  }

}
