import { Component } from '@angular/core';
import * as converter from "number-to-words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The one conversion app';
  numberInWords = '';
  myScriptElement: HTMLScriptElement;

  constructor() {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "./assets/matrixBackGround.js";
  }
  convertArabicNumberToEnglishPhrase(item : any) {
    try {
      this.numberInWords = converter.toWords(item);
    } catch (e: any){
      console.log(e);
    } finally {
      console.log('finally');
    }

  }
}
