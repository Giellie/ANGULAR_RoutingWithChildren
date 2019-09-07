import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main1SubABComponent } from './main1-sub-ab.component';

describe('Main1SubABComponent', () => {
  let component: Main1SubABComponent;
  let fixture: ComponentFixture<Main1SubABComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main1SubABComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main1SubABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
