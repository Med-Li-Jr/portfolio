import { Component, OnInit } from '@angular/core';
import { projectsDB, sideProjectsDB } from 'src/app/modals/data-moacks';
import { ProjectModal } from 'src/app/modals/project.modal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  allProjects: ProjectModal[] = []
  allSideProjects: ProjectModal[] = []

  constructor() { }

  ngOnInit(): void {
    this.allProjects = projectsDB;
    this.allSideProjects = sideProjectsDB;
  }

}
