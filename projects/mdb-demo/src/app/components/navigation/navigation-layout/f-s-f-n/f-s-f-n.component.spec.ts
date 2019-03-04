import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSFNComponent } from './f-s-f-n.component';

describe('FSFNComponent', () => {
  let component: FSFNComponent;
  let fixture: ComponentFixture<FSFNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSFNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSFNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
