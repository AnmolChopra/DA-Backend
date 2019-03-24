import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtopic12Component } from './addtopic12.component';

describe('Addtopic12Component', () => {
  let component: Addtopic12Component;
  let fixture: ComponentFixture<Addtopic12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtopic12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtopic12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
