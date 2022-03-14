import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogicComponent } from './dialogic.component';

describe('DialogicComponent', () => {
  let component: DialogicComponent;
  let fixture: ComponentFixture<DialogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
