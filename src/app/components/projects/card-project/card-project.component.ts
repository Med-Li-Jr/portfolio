import { Component, Input, OnInit } from '@angular/core';
import { ProjectModal } from 'src/app/modals/project.modal';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
    console.log(";qsdf".split(";"))
  }

}
