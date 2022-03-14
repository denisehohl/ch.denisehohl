import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InuComponent } from './inu.component';

describe('InuComponent', () => {
  let component: InuComponent;
  let fixture: ComponentFixture<InuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
