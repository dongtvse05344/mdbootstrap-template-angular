import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HSFNComponent } from './h-s-f-n.component';

describe('HSFNComponent', () => {
  let component: HSFNComponent;
  let fixture: ComponentFixture<HSFNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HSFNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HSFNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
