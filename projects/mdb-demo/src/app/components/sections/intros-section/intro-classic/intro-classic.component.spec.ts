import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroClassicComponent } from './intro-classic.component';

describe('IntroClassicComponent', () => {
  let component: IntroClassicComponent;
  let fixture: ComponentFixture<IntroClassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroClassicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
