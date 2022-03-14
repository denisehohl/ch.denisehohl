import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindwerkComponent } from './windwerk.component';

describe('WindwerkComponent', () => {
  let component: WindwerkComponent;
  let fixture: ComponentFixture<WindwerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindwerkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindwerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
