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
    return this.http.get<Assignment[]>(this.url)
      .subscribe(
        result => {
          this.assignments = result;
          this.assignmentListChangedEvent.next(this.assignments.slice());
          // Return the same list, but sorted by date
          // this.assignmentListChangedEvent.next(this.assignments.slice().sort((a, b) => b.dueDate - a.dueDate));
          // console.log(result);
        }, err => console.error(err));
  }

  getAssignment(id: string) {
    return this.http.get<Assignment>(`${this.url}/${id}`);
      // .subscribe(
      //   result => {
      //     this.assignment = result;
      //     this.assignmentChangedEvent.next(this.assignment);
      //     // console.log(result);
      //   }, err => console.error(err));
  }

  createAssignment(assignment: Assignment) {
    return this.http.post<Assignment>(this.url, assignment)
      .subscribe(
        result => {
          console.log(result);
        }, err => console.error(err));
  }

  updateAssignment(assignment: Assignment) {
    return this.http.put<Assignment>(this.url, assignment)
      .subscribe(
        result => {
          console.log(result);
        }, err => console.error(err));
  }

  deleteAssignment(id: number) {
    return this.http.delete('${this.url}/${id}')
      .subscribe(
        result => {
          console.log(result);
        }, err => console.error(err));
  }



}
