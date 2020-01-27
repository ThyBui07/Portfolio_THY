import { Component, OnInit, Output, Input } from '@angular/core';
import { List } from 'src/app/interfaces/list';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List ;
  constructor() { }

  ngOnInit() {
  }

}
