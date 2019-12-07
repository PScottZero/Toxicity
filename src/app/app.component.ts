import {Component} from '@angular/core';
import {RedditApiService} from './services/reddit-api.service';
import {Comment} from './objects/Comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private redditApiService: RedditApiService) {}

  getComments(): Comment[] {
    return this.redditApiService.getCommentsBestToWorst();
  }
}
