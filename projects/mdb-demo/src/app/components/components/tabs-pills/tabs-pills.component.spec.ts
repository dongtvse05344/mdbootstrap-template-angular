import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPillsComponent } from './tabs-pills.component';

describe('TabsPillsComponent', () => {
  let component: TabsPillsComponent;
  let fixture: ComponentFixture<TabsPillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
