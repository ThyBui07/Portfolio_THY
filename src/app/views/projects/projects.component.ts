import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: project[] = [
    {title: '', stack: '', content: ''},
  ];
  constructor() { }

  ngOnInit() {
  }

}
