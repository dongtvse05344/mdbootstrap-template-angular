import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceSectionComponent } from './ecommerce-section.component';

describe('EcommerceSectionComponent', () => {
  let component: EcommerceSectionComponent;
  let fixture: ComponentFixture<EcommerceSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
