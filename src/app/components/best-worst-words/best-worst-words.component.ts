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

  getRating(score: number): string {
    return this.sentimentService.getRating(score);
  }

  getBestWord(): string {
    return this.redditApiService.bestWord;
  }

  getBestWordScore(): number {
    return this.redditApiService.maxWordScore;
  }

  getWorstWord(): string {
    return this.redditApiService.worstWord;
  }

  getWorstWordScore(): number {
    return this.redditApiService.minWordScore;
  }
}
