import {Component} from '@angular/core';
import {RedditApiService} from '../../services/reddit-api/reddit-api.service';

@Component({
  selector: 'app-word-frequency',
  templateUrl: './word-frequency.component.html',
  styleUrls: ['./word-frequency.component.css']
})
export class WordFrequencyComponent {

  constructor(private redditApiService: RedditApiService) { }

  getWordFrequency(): [string, number][] {
    return this.redditApiService.getWordFrequency();
  }
}
