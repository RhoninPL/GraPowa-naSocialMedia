import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuizListComponent } from '.';

const quizRouting: Routes = [
  {
    path: 'admin',
    component: QuizListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(quizRouting)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
