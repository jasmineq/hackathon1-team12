import { Injectable } from '@angular/core';

import { davedata, quizzes } from './../data/davedata';
import { IQuiz } from './../data/quiz.model';
import { IQuestion } from './../data/question.model';

@Injectable()
export class QuizService {

  getQuizzes() {
    return quizzes;
  }

  getQuiz(id) {
    return quizzes.find(quiz => quiz.id === id);
  }

  getQuestions(quizId) {
    const filteredQuestions = davedata.filter(questions => questions.quiz_id === quizId);
    return filteredQuestions;
  }
}
