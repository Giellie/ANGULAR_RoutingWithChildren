import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main1SubBBComponent } from './main1-sub-bb.component';

describe('Main1SubBBComponent', () => {
  let component: Main1SubBBComponent;
  let fixture: ComponentFixture<Main1SubBBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main1SubBBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main1SubBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
