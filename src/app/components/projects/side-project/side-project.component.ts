import { Component, Input, OnInit } from '@angular/core';
import { ProjectModal } from 'src/app/modals/project.modal';

@Component({
  selector: 'app-side-project',
  templateUrl: './side-project.component.html',
  styleUrls: ['./side-project.component.css']
})
export class SideProjectComponent implements OnInit {

  @Input()
  currentProject: ProjectModal = {
    carousel_name : "default",
    name : "default app",
    description : "description",
    is_mobile: false,
    is_web: false,
    link_url: "",
    images_app:  [],
    technologies: [],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
