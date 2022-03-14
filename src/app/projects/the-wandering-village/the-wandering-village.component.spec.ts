import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWanderingVillageComponent } from './the-wandering-village.component';

describe('TheWanderingVillageComponent', () => {
  let component: TheWanderingVillageComponent;
  let fixture: ComponentFixture<TheWanderingVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheWanderingVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheWanderingVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
