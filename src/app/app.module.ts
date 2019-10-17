import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DataContainerComponent } from './components/data-container/data-container.component';
import {FormsModule} from '@angular/forms';
import { ScoreHeaderComponent } from './components/score-header/score-header.component';
import { BestWorstWordsComponent } from './components/best-worst-words/best-worst-words.component';
import { WordFrequencyComponent } from './components/word-frequency/word-frequency.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DataContainerComponent,
    ScoreHeaderComponent,
    BestWorstWordsComponent,
    WordFrequencyComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
