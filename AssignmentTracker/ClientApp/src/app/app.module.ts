import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AssignmentListComponent } from './assignment/assignment-list.component';
import { AssignmentItemComponent } from './assignment/assignment-item/assignment-item.component';
import { AssignmentDetailComponent } from './assignment/assignment-detail/assignment-detail.component';
import { FooterComponent } from './footer/footer.component';
import { AssignmentCreateComponent } from './assignment/assignment-create/assignment-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AssignmentListComponent,
    AssignmentItemComponent,
    AssignmentDetailComponent,
    FooterComponent,
    AssignmentCreateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'assignments', component: AssignmentListComponent, children: [
        { path: 'new-assignment', component: AssignmentCreateComponent},
        { path: ':id/edit', component: AssignmentDetailComponent},
        { path: ':id', component: AssignmentDetailComponent},
      ]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
