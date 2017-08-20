import { QuizService } from './quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuestion } from './../data/question.model';
import { IQuiz } from './../data/quiz.model';


@Component({
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: IQuiz;
  questions: IQuestion[];

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.questions = this.quizService.getQuestions(+params['id']);
      console.log(this.questions);
      this.quiz = this.quizService.getQuiz(+params['id']);
      console.log(this.quiz);
    });
  }

  answer(choice) {
    alert(choice);
  }
}
