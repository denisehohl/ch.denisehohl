import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattailsTwoComponent } from './cattails-two.component';

describe('CattailsTwoComponent', () => {
  let component: CattailsTwoComponent;
  let fixture: ComponentFixture<CattailsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CattailsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CattailsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
