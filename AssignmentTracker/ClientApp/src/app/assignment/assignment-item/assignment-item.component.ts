import { Component, Input, OnInit } from '@angular/core';

import { Assignment } from 'src/app/models/assignment.model';

@Component({
  selector: 'app-assignment-item',
  templateUrl: './assignment-item.component.html',
  styleUrls: ['./assignment-item.component.css']
})
export class AssignmentItemComponent implements OnInit {
  @Input() assignment: Assignment;
  

  constructor() { }

  ngOnInit() {
  }
}
