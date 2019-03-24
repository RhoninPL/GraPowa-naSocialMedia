import { QuizRoutingModule } from './quiz.routing.module';
// import { QuizService } from './quiz.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EscapeHtmlPipe } from 'src/pipes/keep-html.pipe';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { QuizHttpService } from './quiz.http.service';
import { AngularFirestore, FirestoreSettingsToken  } from '@angular/fire/firestore';

const config = {
  apiKey: 'AIzaSyDvIxAACqfCzrdqBLxD1Fgj2CBOW88rpBE',
  authDomain: 'gra-powazna.firebaseapp.com',
  databaseURL: 'https://gra-powazna.firebaseio.com',
  projectId: 'gra-powazna',
  storageBucket: 'gra-powazna.appspot.com',
  messagingSenderId: '326957377444'
};

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    QuizRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  declarations: [QuizComponent, EscapeHtmlPipe],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }, AngularFirestore, QuizHttpService]
})
export class QuizModule { }
