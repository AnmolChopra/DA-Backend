import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtopic2Component } from './addtopic2.component';

describe('Addtopic2Component', () => {
  let component: Addtopic2Component;
  let fixture: ComponentFixture<Addtopic2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtopic2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtopic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
