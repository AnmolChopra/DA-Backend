import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtopic8Component } from './addtopic8.component';

describe('Addtopic8Component', () => {
  let component: Addtopic8Component;
  let fixture: ComponentFixture<Addtopic8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtopic8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtopic8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
