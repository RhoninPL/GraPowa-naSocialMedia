import { Answer } from './../../models/question';
import { QuizHttpService } from './../../quiz/quiz.http.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Question } from 'src/app/models/question';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-question-form',
  templateUrl: './newQuestionForm.component.html',
  styleUrls: ['./newQuestionForm.component.scss']
})
export class NewQuestionFormComponent implements OnInit {
  public questionForm: FormGroup;
  public contents: Answer[];
  public dates: Answer[];
  @ViewChild('content') content;
  @ViewChild('quality') quality;

  constructor(private readonly formBuilder: FormBuilder,
    private readonly quizService: QuizHttpService) { }

  ngOnInit() {
    this.contents = [];
    this.dates = [];
    this.questionForm = this.formBuilder.group({
      question: '',
      id: '',
      hint: '',
      contents: FormArray,
      dates: FormArray
    });
  }

  public save(): void {
    if (this.questionForm.get('question').value &&
      this.contents.length > 0 &&
      this.dates.length > 0
    ) {
      const question = <Question>{
        question: this.questionForm.get('question').value,
        hint: this.questionForm.get('hint').value,
        contents: this.contents,
        dates: this.dates
      };
      this.quizService.addItem(question);

      this.contents = [];
      this.dates = [];
      this.questionForm.reset();
    }
  }

  public changeContent(content: string, quality: string) {
    if (content && quality) {
      this.contents.forEach(c => {
        if (c.content === content) {
          c.content = this.content.nativeElement.value;
          c.quality = this.quality.nativeElement.value;
        }
      });
    }
  }

  public changeDates(content: string, quality: string) {
    if (content && quality) {
      this.dates.forEach(c => {
        if (c.content === content) {
          c.content = this.content.nativeElement.value;
          c.quality = this.quality.nativeElement.value;
        }
      });
    }
  }

  public addContent(content: string, quality: string) {
    if (content && quality) {
      this.contents.push({
        content: content,
        quality: <number><any>quality
      });
    }
  }

  public addDate(content: string, quality: string) {
    if (content && quality) {
      this.dates.push({
        date: content,
        quality: <number><any>quality
      });
    }
  }

  public removeContent(content: Answer): void {
    this.contents = this.contents.filter(c => c.content === content.content);
  }

  public removeDate(content: Answer): void {
    this.dates = this.dates.filter(c => c.date === content.date);
  }
}
