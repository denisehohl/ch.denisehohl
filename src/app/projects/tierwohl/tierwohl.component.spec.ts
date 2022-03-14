import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierwohlComponent } from './tierwohl.component';

describe('TierwohlComponent', () => {
  let component: TierwohlComponent;
  let fixture: ComponentFixture<TierwohlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierwohlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TierwohlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
