import { Component, OnInit } from '@angular/core';

import { QuizService } from './quiz.service';
import { ScoreService } from './score.service';
import { IQuiz } from './../data/quiz.model';

@Component({
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent implements OnInit {
  quizzes: IQuiz[];
  score: number;

  constructor(
    private quizService: QuizService,
    private scoreService: ScoreService
  ) {}

  ngOnInit() {
    this.quizService.getQuizzes().subscribe(quizzes => {
      this.quizzes = quizzes;
    });
    this.score = this.scoreService.getTotal();
  }

  quizCompleted(id) {
    const completedString = localStorage.getItem('completed');
    const completed = completedString ? JSON.parse(completedString) : [];
    return completed.length && completed.includes(id);
  }
}
