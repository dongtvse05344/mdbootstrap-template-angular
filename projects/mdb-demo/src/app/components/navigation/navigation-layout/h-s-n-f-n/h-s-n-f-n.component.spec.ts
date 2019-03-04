import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HSNFNComponent } from './h-s-n-f-n.component';

describe('HSNFNComponent', () => {
  let component: HSNFNComponent;
  let fixture: ComponentFixture<HSNFNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HSNFNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HSNFNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
