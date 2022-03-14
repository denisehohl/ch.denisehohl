import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KleintierpraxisComponent } from './kleintierpraxis.component';

describe('KleintierpraxisComponent', () => {
  let component: KleintierpraxisComponent;
  let fixture: ComponentFixture<KleintierpraxisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KleintierpraxisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KleintierpraxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
