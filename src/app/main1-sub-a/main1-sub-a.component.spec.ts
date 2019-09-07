import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main1SubAComponent } from './main1-sub-a.component';

describe('Main1SubAComponent', () => {
  let component: Main1SubAComponent;
  let fixture: ComponentFixture<Main1SubAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main1SubAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main1SubAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
