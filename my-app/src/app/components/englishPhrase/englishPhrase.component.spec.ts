import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishPhraseComponent } from './englishPhrase.component';

describe('ChildComponent', () => {
  let component: EnglishPhraseComponent;
  let fixture: ComponentFixture<EnglishPhraseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnglishPhraseComponent]
    });
    fixture = TestBed.createComponent(EnglishPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
