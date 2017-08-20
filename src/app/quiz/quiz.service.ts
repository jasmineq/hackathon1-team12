import { Injectable } from '@angular/core';

import { davedata, quizzes } from './../data/davedata';
import { IQuiz } from './../data/quiz.model';
import { IQuestion } from './../data/question.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class QuizService {

  constructor(private db: AngularFireDatabase) {}

  getQuizzes() {
    return this.db.list('/quizzes');
  }

  getQuiz(id) {
    return this.db.list('/quizzes', { query: {equalTo: id, orderByChild: 'id'}});
  }

  getQuestions(quizId) {
    return this.db.list('/questions', { query: {equalTo: quizId, orderByChild: 'quiz_id'}});
  }

  creatQuiz(quizValues) {
    this.db.list('/quizzes').push(quizValues);
  }

  createQuestion(questionValues) {
    this.db.list('/questions').push(questionValues);
  }
}
