import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtopic9Component } from './addtopic9.component';

describe('Addtopic9Component', () => {
  let component: Addtopic9Component;
  let fixture: ComponentFixture<Addtopic9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtopic9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtopic9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
