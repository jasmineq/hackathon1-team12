import { Component, OnInit } from '@angular/core';
import { IQuiz } from '../data/quiz.model';
import { quizzes } from '../data/davedata';

@Component({
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent implements OnInit {
  quizzes: IQuiz[];

  ngOnInit() {
    this.quizzes = quizzes;
    console.log(this.quizzes);
  };

};

