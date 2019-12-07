import {Component} from '@angular/core';
import {RedditApiService} from '../../services/reddit-api.service';
import {SentimentService} from '../../services/sentiment.service';

@Component({
  selector: 'app-best-worst-words',
  templateUrl: './best-worst-words.component.html',
  styleUrls: ['./best-worst-words.component.scss']
})
export class BestWorstWordsComponent {

  constructor(private redditApiService: RedditApiService,
              private sentimentService: SentimentService) { }

  // returns toxicity scale rating for word
  getRating(score: number): string {
    return this.sentimentService.getRating(score);
  }

  // returns least toxic word
  getBestWord(): string {
    return this.redditApiService.bestWord;
  }

  // returns score of least toxic word
  getBestWordScore(): number {
    return this.redditApiService.maxWordScore;
  }

  // returns most toxic word
  getWorstWord(): string {
    return this.redditApiService.worstWord;
  }

  // returns score of most toxic words
  getWorstWordScore(): number {
    return this.redditApiService.minWordScore;
  }
}
