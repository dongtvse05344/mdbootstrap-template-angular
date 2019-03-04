import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSectionComponent } from './social-section.component';

describe('SocialSectionComponent', () => {
  let component: SocialSectionComponent;
  let fixture: ComponentFixture<SocialSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
