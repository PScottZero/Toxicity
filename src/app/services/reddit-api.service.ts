import {Injectable} from '@angular/core';
import {Comment} from '../objects/Comment';
import Submission from 'snoowrap/dist/objects/Submission';
import Listing from 'snoowrap/dist/objects/Listing';
import {SentimentService} from './sentiment.service';
import * as Stopword from 'stopword';
import * as Snoowrap from 'snoowrap';
import * as UUID from 'uuid/v1';

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {

  comments: Comment[];
  subreddit: string;
  bestWord: string;
  worstWord: string;
  maxWordScore: number;
  minWordScore: number;
  wordFreqList: [string, number][];
  averageScore: number;
  snoowrap: Snoowrap;

  constructor(private sentimentService: SentimentService) {
    this.initApi();
  }

  private initApi() {
    // @ts-ignore
    Snoowrap.fromApplicationOnlyAuth({
      clientId: 'eYt3lQ43V4Dgcg',
      deviceId: UUID()
    }).then(r => {
      this.snoowrap = r;
    });
  }

  analyzeSubreddit(subreddit: string) {
    this.comments = [];
    this.subreddit = subreddit;

    this.getHotPostsFromSubreddit(subreddit)
      .then(posts => {
        for (const post of posts) {
          this.getPostComments(post.id)
            .then(expandedPost => {
              for (const comment of expandedPost.comments) {
                this.comments.push(new Comment(comment.body,
                  this.sentimentService.calculateScore(comment.body)));
              }
              this.calculateAverageScore();
              this.sortCommentsBestToWorst();
              this.calculateWordFrequency();
            });
        }
      });
  }

  private getHotPostsFromSubreddit(subreddit: string): Promise<Listing<Submission>> {
    return this.snoowrap.getSubreddit(subreddit).getHot({limit: 10});
  }

  private getPostComments(postId: string): Promise<Submission> {
    return this.snoowrap.getSubmission(postId).expandReplies({limit: 20, depth: 1});
  }

  calculateAverageScore() {
    this.averageScore = 0;
    for (const comment of this.comments) {
      this.averageScore += comment.score;
    }
    this.averageScore = this.averageScore / this.comments.length;
  }

  calculateWordFrequency() {
    this.maxWordScore = null;
    this.minWordScore = null;
    const wordMap = new Map<string, number>();

    for (const comment of this.comments) {
      const formattedComment = comment.text.replace(/[“”\/\[\].,#!$%^&*;:{}=\-_`~()]/g, '').toLowerCase();
      const split = Stopword.removeStopwords(formattedComment.split(' '));
      for (let word of split) {
        word = word.trim();
        if (word.length <= 25 && word.length > 0) {

          // calculate best and worst words
          const score = this.sentimentService.calculateScore(word);
          if (!(this.maxWordScore) || score > this.maxWordScore) {
            this.bestWord = word;
            this.maxWordScore = score;
          }
          if (!(this.minWordScore) || score < this.minWordScore) {
            this.worstWord = word;
            this.minWordScore = score;
          }

          // count words
          if (wordMap.has(word)) {
            const count = wordMap.get(word);
            wordMap.set(word, count + 1);
          } else {
            wordMap.set(word, 1);
          }
        }
      }
    }

    // remove words with count of one
    this.wordFreqList = Array.from(wordMap);
    for (let i = 0; i < this.wordFreqList.length; i++) {
      if (this.wordFreqList[i][1] === 1) {
        this.wordFreqList.splice(i, 1);
        i--;
      }
    }

    // sort and return word list
    this.wordFreqList.sort((a, b) => {
      return b[1] - a[1];
    });
  }

  sortCommentsBestToWorst() {
    this.comments.sort((a, b) => {
      return b.score - a.score;
    });
  }
}
