import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineSectionComponent } from './magazine-section.component';

describe('MagazineSectionComponent', () => {
  let component: MagazineSectionComponent;
  let fixture: ComponentFixture<MagazineSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazineSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
