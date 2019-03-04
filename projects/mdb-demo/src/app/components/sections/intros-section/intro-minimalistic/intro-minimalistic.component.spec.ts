import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroMinimalisticComponent } from './intro-minimalistic.component';

describe('IntroMinimalisticComponent', () => {
  let component: IntroMinimalisticComponent;
  let fixture: ComponentFixture<IntroMinimalisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroMinimalisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroMinimalisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
