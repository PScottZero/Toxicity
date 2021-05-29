import { Injectable } from '@angular/core';
import * as Sentiment from 'sentiment';

@Injectable({
  providedIn: 'root',
})
export class SentimentService {
  getRating(score: number): string {
    if (score >= 2) {
      return 'Non-Toxic';
    } else if (score >= 1) {
      return 'Very Positive';
    } else if (score >= 0.25) {
      return 'Positive';
    } else if (score > -0.25) {
      return 'Neutral';
    } else if (score > -1) {
      return 'Negative';
    } else if (score > -2) {
      return 'Very Negative';
    } else {
      return 'Toxic';
    }
  }

  calculateScore(str: string): number {
    const sentiment = new Sentiment();
    return sentiment.analyze(str).score;
  }
}
