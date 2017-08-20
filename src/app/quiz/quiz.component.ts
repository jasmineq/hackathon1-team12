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
  chosenAnswer: number | null;
  numberCorrect: number;
  currentQuestion: number;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.chosenAnswer = null;
    this.numberCorrect = 0;
    this.currentQuestion = 0;

    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.questions = this.quizService.getQuestions(+params['id']);
      console.log(this.questions);
      this.quiz = this.quizService.getQuiz(+params['id']);
      console.log(this.quiz);
    });
  }

  answer(choice) {
    if (this.answerIsCorrect(choice)) {
      this.numberCorrect += 1;
    }
    this.chosenAnswer = choice;
  }
  answerIsCorrect(choice) {
    const question = this.questions[this.currentQuestion];
    const correctAnswer = question.choices.indexOf(question.answer);

    return choice === correctAnswer;
  }
  nextQuestion() {
    this.currentQuestion += 1;

    if (this.currentQuestion !== this.questions.length) {
      this.chosenAnswer = null;
    }
  }
}




