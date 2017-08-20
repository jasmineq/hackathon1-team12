import { Component, Input } from '@angular/core';
import { IQuestion } from '../data/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question: IQuestion;

  getLetter(int): string {
    return String.fromCharCode(int + 65);
  }
}
