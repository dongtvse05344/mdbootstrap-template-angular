import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSNFNComponent } from './f-s-n-f-n.component';

describe('FSNFNComponent', () => {
  let component: FSNFNComponent;
  let fixture: ComponentFixture<FSNFNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSNFNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSNFNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
