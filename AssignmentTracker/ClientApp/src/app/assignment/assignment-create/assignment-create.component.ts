import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';

@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.css']
})
export class AssignmentCreateComponent implements OnInit {
  assignment: Assignment;
  
  constructor() { }

  ngOnInit() {
  }

}
