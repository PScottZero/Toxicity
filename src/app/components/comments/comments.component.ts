import { Component } from '@angular/core';
import { Comment } from '../../objects/Comment';
import { RedditApiService } from '../../services/reddit-api.service';
import { SentimentService } from '../../services/sentiment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  constructor(
    private redditApiService: RedditApiService,
    private sentimentService: SentimentService
  ) {}

  // returns subreddit comments
  getComments(): Comment[] {
    return this.redditApiService.comments;
  }

  // returns rating for comment
  getRating(score: number): string {
    return this.sentimentService.getRating(score);
  }
}
