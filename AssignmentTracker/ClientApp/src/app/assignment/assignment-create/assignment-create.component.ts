import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.css']
})
export class AssignmentCreateComponent implements OnInit {
  assignment: Assignment;

  submitted: boolean = false;

  assignmentForm = this.formBuilder.group({
    name: ['', Validators.required],
    course: ['', Validators.required],
    dueDate: ['', Validators.required],
    notes: [''],
    completed: ['']
  });

  constructor(private assignmentService: AssignmentService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.assignmentForm.get('completed').value == '')
       this.assignmentForm.patchValue({'completed': false});

    console.log(this.assignmentForm.value);
    this.assignmentService.createAssignment(this.assignmentForm.value);
    //TODO Emit Event

    this.submitted = true;

    this.router.navigate(['/assignments']);
  }

}
