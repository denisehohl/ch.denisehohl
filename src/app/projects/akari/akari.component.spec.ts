import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkariComponent } from './akari.component';

describe('AkariComponent', () => {
  let component: AkariComponent;
  let fixture: ComponentFixture<AkariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
