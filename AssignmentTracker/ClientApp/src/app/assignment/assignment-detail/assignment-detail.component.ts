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
  // @Input() assignment: Assignment;
  originalAssignment;
  assignment;
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
          this.assignmentService.getAssignment(id).subscribe(
            (result => {
              this.assignment = result
            })
          );
        });
  }

  onSubmit(form: NgForm) {

  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

}
