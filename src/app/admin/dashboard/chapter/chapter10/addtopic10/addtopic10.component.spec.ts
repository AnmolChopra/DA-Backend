import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtopic10Component } from './addtopic10.component';

describe('Addtopic10Component', () => {
  let component: Addtopic10Component;
  let fixture: ComponentFixture<Addtopic10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtopic10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtopic10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
