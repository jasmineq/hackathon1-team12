import { IQuestion } from './../data/question.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
  templateUrl: 'create-question.component.html',
})
export class CreateQuestionComponent implements OnInit {
  quizID: number;
  questionText: string;
  choiceA: string;
  choiceB: string;
  choiceC: string;
  choiceD: string;
  answer: string;
  explanation: string;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.quizID = +params['id'];
      console.log(this.quizID);
    });
  }

  createQuestion(values) {
    const newQuestion: IQuestion = {
      questionText: values.questionText,
      choices: [
        values.choiceA,
        values.choiceB,
        values.choiceC,
        values.choiceD,
      ],
      answer: values.answer,
      explanation: values.explanation,
      quiz_id: this.quizID
    };
    console.log(newQuestion);
    this.quizService.createQuestion(newQuestion);
    this.questionText = '';
    this.choiceA = '';
    this.choiceB = '';
    this.choiceC = '';
    this.choiceD = '';
    this.answer = '';
    this.explanation = '';
  }

}
