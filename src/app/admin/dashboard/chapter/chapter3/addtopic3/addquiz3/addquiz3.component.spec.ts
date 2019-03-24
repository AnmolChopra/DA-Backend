import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addquiz3Component } from './addquiz3.component';

describe('Addquiz3Component', () => {
  let component: Addquiz3Component;
  let fixture: ComponentFixture<Addquiz3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addquiz3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addquiz3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
