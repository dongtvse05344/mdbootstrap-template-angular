import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyContentComponent } from './sticky-content.component';

describe('StickyContentComponent', () => {
  let component: StickyContentComponent;
  let fixture: ComponentFixture<StickyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
