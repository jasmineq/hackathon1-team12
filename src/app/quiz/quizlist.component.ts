import { Component, OnInit } from '@angular/core';

import { QuizService } from './quiz.service';
import { IQuiz } from './../data/quiz.model';

@Component({
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent implements OnInit {
  quizzes: IQuiz[];


  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizzes = this.quizService.getQuizzes();
    console.log(this.quizzes);
  }
}
