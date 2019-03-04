import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroCtaComponent } from './intro-cta.component';

describe('IntroCtaComponent', () => {
  let component: IntroCtaComponent;
  let fixture: ComponentFixture<IntroCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
