import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main1SubBComponent } from './main1-sub-b.component';

describe('Main1SubBComponent', () => {
  let component: Main1SubBComponent;
  let fixture: ComponentFixture<Main1SubBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main1SubBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main1SubBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
