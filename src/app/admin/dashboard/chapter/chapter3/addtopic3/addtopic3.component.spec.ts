import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtopic3Component } from './addtopic3.component';

describe('Addtopic3Component', () => {
  let component: Addtopic3Component;
  let fixture: ComponentFixture<Addtopic3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtopic3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtopic3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
