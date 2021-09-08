import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { ChoicesComponent } from './choices/choices.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    ChoicesComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
