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
  chosenAnswer: number | null;
  numberCorrect: number;
  currentQuestion: number;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quiz = this.quizService.getQuiz(0);
    this.questions = this.quizService.getQuestions(0);
    this.chosenAnswer = null;
    this.numberCorrect = 0;
    this.currentQuestion = 0;
    console.log(this.quiz);
    console.log(this.questions);
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

    if (this.currentQuestion !==              this.questions.length) {
      this.chosenAnswer = null;
    }
  }
}




