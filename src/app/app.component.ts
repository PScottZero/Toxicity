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

  // checks if subreddit data has been loaded
  dataAvailable(): boolean {
    return this.redditApiService.comments !== undefined;
  }
}
