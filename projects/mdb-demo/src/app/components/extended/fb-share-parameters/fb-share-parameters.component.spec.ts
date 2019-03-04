import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbShareParametersComponent } from './fb-share-parameters.component';

describe('FbShareParametersComponent', () => {
  let component: FbShareParametersComponent;
  let fixture: ComponentFixture<FbShareParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbShareParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbShareParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
