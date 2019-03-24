import { QuizHttpService } from './../../quiz/quiz.http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from 'src/app/models/question';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quizList.component.html',
  styleUrls: ['./quizList.component.scss']
})
export class QuizListComponent implements OnInit {
  public questionForm: FormGroup[];
  public newQuestionForm: FormGroup;
  public questions: Question[];
  public ratio: number;

  constructor(private readonly formBuilder: FormBuilder,
    private readonly quizService: QuizHttpService) { }

  ngOnInit() {
    this.quizService.getQuestions().subscribe(questions => {
      this.questions = questions;
    });
  }

  public deletePost(question: Question): void {
    this.quizService.deleteItem(question);
  }

  public add() {

  }

  public save(id: string): void {

  }
}
