import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  allAnchor = document.getElementsByClassName("all-anchor");
  
  constructor() { }

  ngOnInit(): void {
  }

  setMenuActive(anchor : any, e:any){

    
    for (let i = 0; i < this.allAnchor.length; i++) {
      this.allAnchor[i].classList.remove('my-navbar-active')
      if(this.allAnchor[i].classList.contains(anchor)) 
        this.allAnchor[i].classList.add("my-navbar-active")
    }
      
    location.hash = "#" + anchor
  }
  
}
