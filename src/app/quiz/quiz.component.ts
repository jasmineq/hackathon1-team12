import { Component, OnInit } from '@angular/core';
import { davedata } from '../data/davedata';
import { IQuestion } from '../data/question.model';

@Component({
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: IQuestion[];

  ngOnInit() {
    this.questions = davedata;
  }
}

