import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addquiz6Component } from './addquiz6.component';

describe('Addquiz6Component', () => {
  let component: Addquiz6Component;
  let fixture: ComponentFixture<Addquiz6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addquiz6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addquiz6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
