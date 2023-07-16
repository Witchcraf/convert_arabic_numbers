import { Component } from '@angular/core';
import * as converter from "number-to-words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  numberInWords = '';
  constructor() { }
  convertArabicNumberToEnglishPhrase(item : any) {
    this.numberInWords = converter.toWords(item);
  }
}
