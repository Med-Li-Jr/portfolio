import { Component, Input, OnInit } from '@angular/core';
import { SkillsItem } from 'src/app/modals/project.modal';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input() itemSkill!: SkillsItem;
  constructor() { }

  ngOnInit(): void {
  }

}
