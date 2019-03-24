import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtopic6Component } from './addtopic6.component';

describe('Addtopic6Component', () => {
  let component: Addtopic6Component;
  let fixture: ComponentFixture<Addtopic6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtopic6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtopic6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
