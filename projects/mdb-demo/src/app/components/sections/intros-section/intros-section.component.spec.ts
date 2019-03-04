import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrosSectionComponent } from './intros-section.component';

describe('IntrosSectionComponent', () => {
  let component: IntrosSectionComponent;
  let fixture: ComponentFixture<IntrosSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrosSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
