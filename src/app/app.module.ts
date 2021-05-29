import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BestWorstWordsComponent } from './components/best-worst-words/best-worst-words.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ScoreHeaderComponent } from './components/score-header/score-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WordFrequencyComponent } from './components/word-frequency/word-frequency.component';

@NgModule({
  declarations: [
    AppComponent,
    BestWorstWordsComponent,
    CommentsComponent,
    ScoreHeaderComponent,
    SidebarComponent,
    WordFrequencyComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
