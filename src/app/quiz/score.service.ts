import { Injectable } from '@angular/core';

@Injectable()
export class ScoreService {
  getTotal(): number {
    const scoresText = localStorage.getItem('scores');
    const scores = scoresText ? JSON.parse(scoresText) : {};

    return Object.values(scores).reduce((a, b) => a + b, 0);
  }

  setScore(id, score) {
    const scoresText = localStorage.getItem('scores');
    const scores = scoresText ? JSON.parse(scoresText) : {};

    localStorage.setItem('scores', JSON.stringify({ ...scores, [id]: score }));
  }
}
