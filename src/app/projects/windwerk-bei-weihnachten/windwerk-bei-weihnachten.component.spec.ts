import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindwerkBeiWeihnachtenComponent } from './windwerk-bei-weihnachten.component';

describe('WindwerkBeiWeihnachtenComponent', () => {
  let component: WindwerkBeiWeihnachtenComponent;
  let fixture: ComponentFixture<WindwerkBeiWeihnachtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindwerkBeiWeihnachtenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindwerkBeiWeihnachtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
