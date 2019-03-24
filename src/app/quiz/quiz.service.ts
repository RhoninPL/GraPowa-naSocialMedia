import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question, UserAnswer } from '../models/question';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions = new BehaviorSubject<Question[]>(null);
  private storageKey = 'userAnswers';
  private userAnswers = new BehaviorSubject<UserAnswer[]>(null);
  private questionsUrl = 'api/questions';

  constructor( private http: HttpClient) {
    this.initialize();
  }

  // add(user: User) {
  //   this.user.next(user);
  //   this.saveToLocalStorage();
  // }

  // saveToLocalStorage() {
  //   localStorage.setItem(this.storageKey, JSON.stringify(this.user.value));
  // }

  initialize() {
    const userAnswers = localStorage.getItem(this.storageKey);
    if (userAnswers) {
      this.userAnswers.next(JSON.parse(userAnswers));
    } else {
      // this.userAnswers.next();
    }
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
    // return this.questions.asObservable();
  }

  answer(question: Question, answer: UserAnswer): void {
    if (this.userAnswers.value == null) {
      answer.Id = 1;
      this.userAnswers.next([answer]);

      return;
    }

    const userAnswers = this.userAnswers.value;
    const userAnswer = userAnswers.filter(a => a.Id === answer.Id);

    if (userAnswer == null) {
      answer.Id = userAnswers.length + 1;
      userAnswers.push(answer);
      this.userAnswers.next(userAnswers);

      return;
    }

    // const index = userAnswers.findIndex(a => a.)
    // userAnswer[0].Weight = answer.Weight;

  }
}
