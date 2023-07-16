import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnglishPhraseComponent } from './englishPhrase/englishPhrase.component';

@NgModule({
  declarations: [
    AppComponent,
    EnglishPhraseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
