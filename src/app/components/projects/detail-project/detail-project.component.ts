import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})
export class DetailProjectComponent implements OnInit {

  nameProjects : any = "";

  constructor(
    private route: ActivatedRoute ) { }
  
    ngOnInit(): void {
    setTimeout( () => {
      document.getElementById("nav-projects")?.classList.add("my-navbar-active")
    }, 500)

    this.nameProjects = (this.route.snapshot.paramMap.get('name'));

  }

}
