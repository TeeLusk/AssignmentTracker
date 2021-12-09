import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AssignmentService } from './assignment.service';
import { Assignment } from '../models/assignment.model';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {

  private subscription: Subscription;
  assignments: Assignment[];

  constructor(private assignmentService: AssignmentService) {
  }

  ngOnInit() {
    this.subscription = this.assignmentService.assignmentListChangedEvent
      .subscribe(
        (assignments: Assignment[]) => {
          this.assignments = assignments;
        });
    this.assignmentService.getAssignments();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
