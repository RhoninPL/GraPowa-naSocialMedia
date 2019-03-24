import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question, UserAnswer } from '../models/question';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QuizHttpService {
  private questions = new BehaviorSubject<Question[]>(null);
  private storageKey = 'userAnswers';
  private userAnswers = new BehaviorSubject<UserAnswer[]>(null);
  private questionsUrl = 'api/questions';
  public items: Observable<Question[]>;
  private itemsCollection: AngularFirestoreCollection<Question>;

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.itemsCollection = db.collection<Question>('items');
  }

  public addItem(question: Question): Promise<void> {
    question.id = this.db.createId();

    return this.itemsCollection.doc(question.id).set(question)
      .then(t =>
        console.log(t)
      )
      .catch(e =>
        console.log(e)
      );
  }

  public updateItem(question: Question): void {
    this.itemsCollection.doc(question.id).update(question)
      .then(t =>
        console.log(t)
      )
      .catch(e =>
        console.log(e)
      );
  }

  public deleteItem(question: Question): void {
    this.itemsCollection.doc(question.id).delete();
  }

  getQuestions(): Observable<Question[]> {
    return this.itemsCollection.valueChanges();
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
