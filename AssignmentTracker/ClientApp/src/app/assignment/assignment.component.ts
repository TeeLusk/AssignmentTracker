import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  public assignments: Assignment[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Assignment[]>('https://localhost:44314/api/assignments')
      .subscribe(
        result => {
          this.assignments = result;
          console.log(result);
        }, err => console.error(err));
  }
}

interface Assignment {
  name: string;
  course: string;
  notes: string;
  dueDate: string;
  completed: boolean;
}
