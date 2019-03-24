import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtopic7Component } from './addtopic7.component';

describe('Addtopic7Component', () => {
  let component: Addtopic7Component;
  let fixture: ComponentFixture<Addtopic7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtopic7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtopic7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
