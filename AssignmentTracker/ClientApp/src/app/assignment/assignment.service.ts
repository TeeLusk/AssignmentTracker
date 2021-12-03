import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  public assignments: Assignment[];
  public assignment: Assignment;

  public url: string = 'https://localhost:44314/api/assignments';

  assignmentListChangedEvent = new Subject<Assignment[]>();
  assignmentChangedEvent = new Subject<Assignment>();

  constructor(private http: HttpClient) {

  }
  getAssignments() {
    this.http.get<Assignment[]>(this.url)
      .subscribe(
        result => {
          this.assignments = result;
          this.assignmentListChangedEvent.next(this.assignments.slice());
          console.log(result);
        }, err => console.error(err));
  }

  getAssignment(id: number) {
    this.http.get<Assignment>('${this.url}/${id}')
      .subscribe(
        result => {
          this.assignment = result;
          this.assignmentChangedEvent.next(this.assignment);
          console.log(result);
        }, err => console.error(err));
  }

  createAssignment(assignment: Assignment) {

  }

  updateAssignment(assignment: Assignment) {

  }

  deleteAssignment(assignment: Assignment) {

  }

}