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

  // returns rating under toxicity scale
  getRating(score: number): string {
    return this.sentimentService.getRating(score);
  }

  // returns subreddit name
  getSubreddit(): string {
    return this.redditApiService.subreddit;
  }

  // returns average sentiment score for subreddit as a string
  getAverageScoreAsString(): string {
    return this.getAverageScore().toFixed(3);
  }

  // returns average sentiment score for subreddit
  getAverageScore(): number {
    return this.redditApiService.averageScore;
  }
}
