import { Answer } from './../../models/question';
import { QuizHttpService } from './../../quiz/quiz.http.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Question } from 'src/app/models/question';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-question-form',
  templateUrl: './questionForm.component.html',
  styleUrls: ['./questionForm.component.scss']
})
export class QuestionFormComponent implements OnInit {
  public questionForm: FormGroup;
  @Input() question: Question;

  constructor(private readonly formBuilder: FormBuilder,
    private readonly quizServie: QuizHttpService) { }

  ngOnInit() {
    let contents;
    if (this.question.contents) {
      contents = this.question.contents.map(content =>
        this.createAnswerContent(content)
      );
    }
    let dates;
    if (this.question.dates) {
      dates = this.question.dates.map(date =>
        this.createAnswerDate(date)
      );
    }
    this.questionForm = this.formBuilder.group({
      question: this.question.question,
      hint: this.question.hint,
      id: this.question.id,
      contents: contents && this.formBuilder.array(contents),
      dates: dates && this.formBuilder.array(dates)
    });
  }

  public addAnswer(): void {
    this.contents.push(this.createAnswerContent({ quality: 0, content: '' }));
  }

  public addDate(): void {
    this.dates.push(this.createAnswerDate({ quality: 0, date: '' }));
  }

  public removeDate(i: number): void {
    this.dates.removeAt(i);
  }

  public removeContent(i: number): void {
    this.contents.removeAt(i);
  }

  public save(): void {
    this.quizServie.updateItem({
      id: this.question.id,
      hint: this.questionForm.get('hint').value,
      contents: this.contents.controls.map(content => {
        const fromGroup = <FormGroup>content;
        return {
          content: fromGroup.get('content').value,
          quality: fromGroup.get('quality').value
        };
      }),
      dates: this.dates.controls.map(content => {
        const fromGroup = <FormGroup>content;
        return {
          date: fromGroup.get('date').value,
          quality: fromGroup.get('quality').value
        };
      }),
      question: this.questionForm.get('question').value
    });
  }

  get contents(): FormArray {
    return this.questionForm.get('contents') as FormArray;
  }

  get dates(): FormArray {
    return this.questionForm.get('dates') as FormArray;
  }

  private createAnswerContent(answer: Answer): FormGroup {
    return this.formBuilder.group({
      content: answer.content,
      quality: answer.quality,
    });
  }

  private createAnswerDate(answer: Answer): FormGroup {
    return this.formBuilder.group({
      date: answer.date,
      quality: answer.quality,
    });
  }
}
