import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreHeaderComponent } from './score-header.component';

describe('ScoreHeaderComponent', () => {
  let component: ScoreHeaderComponent;
  let fixture: ComponentFixture<ScoreHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
