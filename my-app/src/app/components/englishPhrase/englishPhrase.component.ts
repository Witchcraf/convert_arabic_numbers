import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './englishPhrase.component.html',
  styleUrls: ['./englishPhrase.css']
})
export class EnglishPhraseComponent {
  @Input() data: '';
  constructor() {
    this.data = '';
  }
}
