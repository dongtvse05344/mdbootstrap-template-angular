import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroContactComponent } from './intro-contact.component';

describe('IntroContactComponent', () => {
  let component: IntroContactComponent;
  let fixture: ComponentFixture<IntroContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
