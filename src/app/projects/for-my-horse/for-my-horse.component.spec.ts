import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForMyHorseComponent } from './for-my-horse.component';

describe('ForMyHorseComponent', () => {
  let component: ForMyHorseComponent;
  let fixture: ComponentFixture<ForMyHorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForMyHorseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForMyHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
