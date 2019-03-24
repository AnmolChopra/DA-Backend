import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addquiz9Component } from './addquiz9.component';

describe('Addquiz9Component', () => {
  let component: Addquiz9Component;
  let fixture: ComponentFixture<Addquiz9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addquiz9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addquiz9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
