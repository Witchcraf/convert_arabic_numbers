import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  number = '';
  constructor() { }
  convertArabicNumberToEnglishPhrase(item : any) {
    this.number = item;
  }
}
