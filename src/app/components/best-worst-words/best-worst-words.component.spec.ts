import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestWorstWordsComponent } from './best-worst-words.component';

describe('BestWorstWordsComponent', () => {
  let component: BestWorstWordsComponent;
  let fixture: ComponentFixture<BestWorstWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestWorstWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestWorstWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
