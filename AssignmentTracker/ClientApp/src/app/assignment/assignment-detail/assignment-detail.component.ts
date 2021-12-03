import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Assignment } from 'src/app/models/assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignment: Assignment;

  constructor() { }

  ngOnInit() {
  }

}
