import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleCauseComponent } from './possible-cause.component';

describe('PossibleCauseComponent', () => {
  let component: PossibleCauseComponent;
  let fixture: ComponentFixture<PossibleCauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibleCauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibleCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
