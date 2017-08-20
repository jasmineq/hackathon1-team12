import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IQuestion } from '../data/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question: IQuestion;
  @Output() onAnswer = new EventEmitter<number>();

  getLetter(int): string {
    return String.fromCharCode(int + 65);
  }

  answer(choice: number) {
    this.onAnswer.emit(choice);
  }
}
