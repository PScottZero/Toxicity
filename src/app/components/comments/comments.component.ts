import {Component} from '@angular/core';
import {Comment} from '../../objects/Comment';
import {RedditApiService} from '../../services/reddit-api/reddit-api.service';
import {SentimentService} from '../../services/sentiment/sentiment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  constructor(private redditApiService: RedditApiService,
              private sentimentService: SentimentService) { }

  getComments(): Comment[] {
    return this.redditApiService.comments;
  }

  getRating(score: number): string {
    return this.sentimentService.getRating(score);
  }
}
