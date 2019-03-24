import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtopic11Component } from './addtopic11.component';

describe('Addtopic11Component', () => {
  let component: Addtopic11Component;
  let fixture: ComponentFixture<Addtopic11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtopic11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtopic11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
