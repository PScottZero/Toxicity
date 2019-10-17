import {Component} from '@angular/core';
import {Comment} from '../../objects/Comment';
import {RedditApiService} from '../../services/reddit-api/reddit-api.service';

@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.css']
})
export class DataContainerComponent {

  constructor(private redditApiService: RedditApiService) { }

  getComments(): Comment[] {
    return this.redditApiService.getCommentsBestToWorst();
  }
}
