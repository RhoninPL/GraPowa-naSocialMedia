import { QuizService } from './../quiz.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from 'src/app/models/question';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { QuizHttpService } from '../quiz.http.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public questionForm: FormGroup;
  public questions: Question[];
  public ratio: number;
  public show = false;

  constructor(private readonly formBuilder: FormBuilder,
    private readonly quizService: QuizHttpService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
    });
    this.quizService.getQuestions().subscribe((questions: Question[]) => {
      questions.map(question =>
        this.questionForm.addControl(question.id.toString(), new FormControl('', Validators.required))
      );
      questions.map(question =>
        this.questionForm.addControl(question.id.toString() + 'time', new FormControl('', Validators.required))
      );
      this.questions = questions;
    });
  }

  save(content: any) {
    if (!this.questionForm.valid) {
      alert('Wypełnij wszystkie pola');

      return;
    }

    let ratio = 0;
    for (let index = 0; index < this.questions.length; index++) {
      const question = this.questions[index];
      const answerIndex = this.questionForm.get(question.id.toString()).value;
      ratio = ratio + <number><any>question.contents[answerIndex].quality;

      const answerTimeIndex = this.questionForm.get(question.id.toString() + 'time').value;
      ratio = ratio + <number><any>question.dates[answerTimeIndex].quality;
    }

    this.ratio = ratio * 1000;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  public showHint(question: Question): void {
    this.show = !this.show;
  }
}
