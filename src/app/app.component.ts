import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'portfolio';

  navLi = document.getElementsByClassName("nav-li");
  sections : any = document.getElementsByClassName("section");


  constructor() { }

  ngOnInit(): void {
    
    this.changeLinkState()
  }

  
  
  changeLinkState() {
    let mainThis = this;
    window.onscroll = function () { 
      let index = mainThis.sections.length;
      let scrollTop = document.documentElement.scrollTop ?? 0
  
      
      while (--index && scrollTop + 75 < mainThis.sections[index].offsetTop) { }
      
      for(let i = 0; i < mainThis.navLi.length; i++)
      {
        mainThis.navLi[i].classList.remove('my-navbar-active')
      }

      
  
      switch (mainThis.sections[index].id) {
        case "home-page": break;
        case "first-quote": {
          mainThis.navLi[0].classList.add('my-navbar-active');
          break;
        }
        case "skills-page": {
          mainThis.navLi[0].classList.add('my-navbar-active');
          break;
        }
        case "second-quote": {
          mainThis.navLi[1].classList.add('my-navbar-active');
          break;
        }
        case "projects-page": {
          mainThis.navLi[1].classList.add('my-navbar-active');
          break;
        }
        case "about-page": {
          mainThis.navLi[2].classList.add('my-navbar-active');
          break;
        }
        case "contact-page": {
          mainThis.navLi[3].classList.add('my-navbar-active');
          break;
        }
      }
  
    }
  }

}
