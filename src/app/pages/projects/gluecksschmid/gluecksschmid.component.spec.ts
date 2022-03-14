import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GluecksschmidComponent } from './gluecksschmid.component';

describe('GluecksschmidComponent', () => {
  let component: GluecksschmidComponent;
  let fixture: ComponentFixture<GluecksschmidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GluecksschmidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GluecksschmidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
