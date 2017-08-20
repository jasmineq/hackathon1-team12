import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { davedata, quizzes } from './../data/davedata';
import { IQuiz } from './../data/quiz.model';
import { QuizService } from './quiz.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  nextID: number;
  name: string;
  category: string;
  difficulty: string;

  constructor(
    private db: AngularFireDatabase,
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit() {
    this.quizService.getQuizzes().subscribe(quizzes => {
      const maxId = quizzes.map(quiz => quiz.id).sort()[quizzes.length - 1];
      this.nextID = maxId + 1;
      console.log(this.nextID);
    });
  }

  createQuiz(values) {
    const routeID = this.nextID;
    const newQuiz: IQuiz = {
      id: this.nextID,
      category: values.category,
      difficulty: values.difficulty,
      name: values.name
    };
    this.quizService.creatQuiz(newQuiz);
    this.router.navigate(['/quiz/new/question', routeID]);
  }

}
