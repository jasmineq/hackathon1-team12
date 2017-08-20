import { QuizService } from './quiz.service';
import { Component, OnInit } from '@angular/core';
import { IQuestion } from './../data/question.model';
import { IQuiz } from './../data/quiz.model';

@Component({
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: IQuiz;
  questions: IQuestion[];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quiz = this.quizService.getQuiz(0);
    this.questions = this.quizService.getQuestions(0);
    console.log(this.quiz);
    console.log(this.questions);
  }
}
