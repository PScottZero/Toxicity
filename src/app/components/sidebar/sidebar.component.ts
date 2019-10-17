import {Component, OnInit} from '@angular/core';
import {RedditApiService} from '../../services/reddit-api/reddit-api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  placeholder: string;
  footerText: string;
  searchText: string;

  constructor(private redditApiService: RedditApiService) { }

  ngOnInit() {
    this.placeholder = 'Enter a subreddit or hashtag';
    this.footerText = 'Created by Paul Scott, 17 October 2019';
  }

  analyze() {
    this.searchText = this.searchText.trim();
    if (this.searchText.charAt(0) === '#') {
      // TODO implement twitter api
    } else {
      this.redditApiService.analyzeSubreddit(this.searchText);
    }
  }
}
