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

  // public url: string = 'https://localhost:5001/api/assignments';
  public url: string = 'https://localhost:44314/api/assignments';

  assignmentListChangedEvent = new Subject<Assignment[]>();
  assignmentChangedEvent = new Subject<Assignment>();

  constructor(private http: HttpClient) {

  }

  sortAndSend() {
    this.assignments.sort((a, b) => (a.dueDate > b.dueDate) ? 1 : ((b.dueDate > a.dueDate) ? -1 : 0));
    this.assignmentListChangedEvent.next(this.assignments.slice());
  }

  getAssignments() {
    return this.http.get<Assignment[]>(this.url)
      .subscribe(
        result => {
          this.assignments = result;
          this.sortAndSend();
        }, err => console.error(err));
  }

  getAssignment(id: string) {
    return this.http.get<Assignment>(`${this.url}/${id}`);
  }

  createAssignment(assignment: Assignment) {
    return this.http.post<Assignment>(this.url, assignment)
    .subscribe(
      result => {
        console.log(result);
        this.assignments.push(result);
        this.sortAndSend();
        }, err => console.error(err));
  }

  updateAssignment(assignment: Assignment) {
    const pos = this.assignments.findIndex(a => a.assignmentId == assignment.assignmentId);

    this.assignments[pos] = assignment;
    this.sortAndSend();

    return this.http.put<Assignment>(`${this.url}/${assignment.assignmentId}`, assignment);
  }

  deleteAssignment(id: number) {
    const pos = this.assignments.findIndex(a => a.assignmentId == id);

    this.assignments.splice(pos, 1);
    this.sortAndSend();
    return this.http.delete(`${this.url}/${id}`);
  }
}
