import { Component, OnInit } from '@angular/core';
import { skills } from 'src/app/modals/data-moacks';
import { SkillsItem } from 'src/app/modals/project.modal';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  currentSkills : SkillsItem[] = skills;
  constructor() { }

  ngOnInit(): void {
  }

}
