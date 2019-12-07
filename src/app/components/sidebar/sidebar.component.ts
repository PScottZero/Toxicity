import {Component} from '@angular/core';
import {RedditApiService} from '../../services/reddit-api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  showDropDown = false;

  placeholder = 'Enter a subreddit';
  createdBy = 'Created by Paul Scott using Angular';
  lastUpdated = 'Last Updated 6 December 2019';
  searchText: string;

  description = 'Toxicity performs sentiment analysis on a large sample of comments from a given subreddit. ' +
    'The subreddit\'s "toxicity" is then rated using the following scale:';

  constructor(private redditApiService: RedditApiService) { }

  // performs sentiment analysis on a given subreddit
  analyze() {
    this.searchText = this.searchText.trim();
    if (this.searchText.substr(0, 2) === 'r/') {
      this.searchText = this.searchText.substr(2);
    }
    this.redditApiService.analyzeSubreddit(this.searchText);
  }

  // toggle drop down (only for mobile)
  toggleMenu() {
    this.showDropDown = !this.showDropDown;
  }
}
