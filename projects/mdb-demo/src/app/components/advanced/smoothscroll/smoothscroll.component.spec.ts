import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothscrollComponent } from './smoothscroll.component';

describe('SmoothscrollComponent', () => {
  let component: SmoothscrollComponent;
  let fixture: ComponentFixture<SmoothscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
