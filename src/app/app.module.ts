import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizlistComponent } from './quiz/quizlist.component';
import { QuizComponent } from './quiz/quiz.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { QuizService } from './quiz/quiz.service';
import { ScoreService } from './quiz/score.service';
import { FooterComponent } from './footer/footer.component';
import { QuestionComponent } from './question/question.component';
import { environment } from './../environments/environment';
import { CreateQuizComponent } from './quiz/create-quiz.component';
import { CreateQuestionComponent } from './quiz/create-question.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizlistComponent,
    QuizComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    QuestionComponent,
    CreateQuizComponent,
    CreateQuestionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'gitflash'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'quiz/new/question/:id', component: CreateQuestionComponent },
      { path: 'quiz/new', component: CreateQuizComponent },
      { path: 'quiz/:id', component: QuizComponent },
      { path: 'quiz', component: QuizlistComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  providers: [QuizService, ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
