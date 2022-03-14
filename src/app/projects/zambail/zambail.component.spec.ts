import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZambailComponent } from './zambail.component';

describe('ZambailComponent', () => {
  let component: ZambailComponent;
  let fixture: ComponentFixture<ZambailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZambailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZambailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
