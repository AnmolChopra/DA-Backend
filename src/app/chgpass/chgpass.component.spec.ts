import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChgpassComponent } from './chgpass.component';

describe('ChgpassComponent', () => {
  let component: ChgpassComponent;
  let fixture: ComponentFixture<ChgpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChgpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChgpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
