import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpitzentraumComponent } from './spitzentraum.component';

describe('SpitzentraumComponent', () => {
  let component: SpitzentraumComponent;
  let fixture: ComponentFixture<SpitzentraumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpitzentraumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpitzentraumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
