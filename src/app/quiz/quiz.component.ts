import { QuizService } from './quiz.service';
import { ScoreService } from './score.service';
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
  score: number;

  constructor(
    private quizService: QuizService,
    private scoreService: ScoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.chosenAnswer = null;
    this.numberCorrect = 0;
    this.currentQuestion = 0;
    this.score = 0;

    this.route.params.subscribe(params => {
      this.quizService.getQuiz(+params['id']).subscribe(quizzes => {
        this.quiz = quizzes[0];
      });
      this.quizService.getQuestions(+params['id']).subscribe(questions => {
        this.questions = questions;
      });
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
    } else {
      const completedString = localStorage.getItem('completed');
      const completed = completedString ? JSON.parse(completedString) : [];
      localStorage.setItem(
        'completed',
        JSON.stringify([...completed, this.quiz.id])
      );
      this.score = this.numberCorrect / this.questions.length * 100;
      this.scoreService.setScore(this.quiz.id, this.score);
    }
  }
}
