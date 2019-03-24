import { QuestionFormComponent } from './questionForm/questionForm.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizListComponent } from './quizList/quizList.component';
import { AdminRoutingModule } from './admin.routing.module';
import { NewQuestionFormComponent } from './newQuestionForm/newQuestionForm.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    AdminRoutingModule,
    HttpClientModule,
  ],
  declarations: [QuizListComponent, QuestionFormComponent, NewQuestionFormComponent],
})
export class AdminModule { }
