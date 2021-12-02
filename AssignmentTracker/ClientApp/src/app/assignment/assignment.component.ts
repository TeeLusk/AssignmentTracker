import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AssignmentService } from './assignment.service';
import { Assignment } from '../models/assignment.model';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  private subscription: Subscription;

  assignments: Assignment[];

  constructor(private assignmentService: AssignmentService) {
  }

  ngOnInit() {
    this.subscription = this.assignmentService.assignmentListChangedEvent
      .subscribe(
      (assignments : Assignment[]) => {
        this.assignments = assignments;
      });
      this.assignmentService.getAssignments();
  }

}
