import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main1SubBAComponent } from './main1-sub-ba.component';

describe('Main1SubBAComponent', () => {
  let component: Main1SubBAComponent;
  let fixture: ComponentFixture<Main1SubBAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main1SubBAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main1SubBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
