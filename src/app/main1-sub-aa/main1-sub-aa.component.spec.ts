import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main1SubAAComponent } from './main1-sub-aa.component';

describe('Main1SubAAComponent', () => {
  let component: Main1SubAAComponent;
  let fixture: ComponentFixture<Main1SubAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main1SubAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main1SubAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
