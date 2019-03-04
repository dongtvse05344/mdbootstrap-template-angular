import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroParallaxComponent } from './intro-parallax.component';

describe('IntroParallaxComponent', () => {
  let component: IntroParallaxComponent;
  let fixture: ComponentFixture<IntroParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
