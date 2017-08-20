import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizlistComponent } from './quiz/quizlist.component';
import { QuizComponent } from './quiz/quiz.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { QuizService } from './quiz/quiz.service';
import { FooterComponent } from './footer/footer.component';
import { QuestionComponent } from './question/question.component';
import { environment } from './../environments/environment';
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
    CreateQuestionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'gitflash'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'quiz/new/question', component: CreateQuestionComponent },
      { path: 'quiz/:id', component: QuizComponent },
      { path: 'quiz', component: QuizlistComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
