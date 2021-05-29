import { Component } from '@angular/core';
import { RedditApiService } from '../../services/reddit-api.service';

@Component({
  selector: 'app-word-frequency',
  templateUrl: './word-frequency.component.html',
  styleUrls: ['./word-frequency.component.scss'],
})
export class WordFrequencyComponent {
  constructor(private redditApiService: RedditApiService) {}

  // returns word frequency list
  getWordFrequency(): [string, number][] {
    return this.redditApiService.wordFreqList;
  }
}
