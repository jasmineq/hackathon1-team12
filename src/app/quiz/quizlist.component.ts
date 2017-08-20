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
    this.quizService.getQuizzes().subscribe(quizzes => {
      this.quizzes = quizzes;
    });
  }

  quizCompleted(id) {
    const completedString = localStorage.getItem('completed');
    const completed = completedString ? JSON.parse(completedString) : [];
    return completed.length && completed.includes(id);
  }
}
