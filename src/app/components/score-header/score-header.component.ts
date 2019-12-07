import {Component} from '@angular/core';
import {SentimentService} from '../../services/sentiment.service';
import {RedditApiService} from '../../services/reddit-api.service';

@Component({
  selector: 'app-score-header',
  templateUrl: './score-header.component.html',
  styleUrls: ['./score-header.component.scss']
})
export class ScoreHeaderComponent {

  constructor(private redditApiService: RedditApiService,
              private sentimentService: SentimentService) { }

  getRating(score: number): string {
    return this.sentimentService.getRating(score);
  }

  getSubreddit(): string {
    return this.redditApiService.subreddit;
  }

  getAverageScoreAsString(): string {
    return this.redditApiService.getAverageScore().toFixed(3);
  }

  getAverageScore(): number {
    return this.redditApiService.getAverageScore();
  }
}
