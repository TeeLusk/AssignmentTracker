import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import { Assignment } from 'src/app/models/assignment.model';
import {AssignmentService} from "../assignment.service";
import {Subscription} from "rxjs";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  assignment = new Assignment;
  editMode: boolean = false;

  private subscription: Subscription;


  constructor(private assignmentService: AssignmentService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          let id = params['id'];
          this.subscription = this.assignmentService.getAssignment(id).subscribe(
            (result => {
              this.assignment = result;
            }));
        });
  }
  
  toggleEdit() {
    this.editMode = !this.editMode;
  }

  onDelete() {
    this.subscription = this.assignmentService.deleteAssignment(this.assignment.assignmentId).subscribe();

    this.router.navigate(['/assignments']);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.assignment);
    this.subscription = this.assignmentService.updateAssignment(this.assignment).subscribe(
      (result => {
        this.assignment = result;
      })
    );
  }


}
