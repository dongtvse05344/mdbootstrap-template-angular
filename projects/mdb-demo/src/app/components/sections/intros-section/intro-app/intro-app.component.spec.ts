import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroAppComponent } from './intro-app.component';

describe('IntroAppComponent', () => {
  let component: IntroAppComponent;
  let fixture: ComponentFixture<IntroAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
