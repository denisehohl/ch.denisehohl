import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtcConsultingComponent } from './ctc-consulting.component';

describe('CtcConsultingComponent', () => {
  let component: CtcConsultingComponent;
  let fixture: ComponentFixture<CtcConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtcConsultingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtcConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
