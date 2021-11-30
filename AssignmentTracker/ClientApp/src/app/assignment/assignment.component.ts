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
    http.get<Assignment[]>(baseUrl + 'assignment')
      .subscribe(
        result => {
          this.assignments = result;
        }, err => console.error(err));
  }



}

interface Assignment {
  date: string;
  title: string;
}
