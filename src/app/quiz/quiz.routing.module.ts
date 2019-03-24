import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuizComponent } from '.';

const quizRouting: Routes = [
  {
    path: 'quiz',
    component: QuizComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(quizRouting)
  ],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
