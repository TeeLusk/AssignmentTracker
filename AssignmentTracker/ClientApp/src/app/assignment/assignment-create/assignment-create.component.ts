import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
              private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.assignmentForm.get('completed').value == '')
       this.assignmentForm.patchValue({'completed': false});
    
    console.log(this.assignmentForm.value);
    this.assignmentService.createAssignment(this.assignmentForm.value);

    this.submitted = true;
  }

}
