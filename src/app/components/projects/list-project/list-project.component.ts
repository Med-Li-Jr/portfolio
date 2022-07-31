import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout( () => {
      document.getElementById("nav-projects")?.classList.add("my-navbar-active")
    }, 500)
  }

}
