import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbMixedShareComponent } from './fb-mixed-share.component';

describe('FbMixedShareComponent', () => {
  let component: FbMixedShareComponent;
  let fixture: ComponentFixture<FbMixedShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbMixedShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbMixedShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
