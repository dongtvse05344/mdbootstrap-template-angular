import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlippingCardsComponent } from './flipping-cards.component';

describe('FlippingCardsComponent', () => {
  let component: FlippingCardsComponent;
  let fixture: ComponentFixture<FlippingCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlippingCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlippingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
