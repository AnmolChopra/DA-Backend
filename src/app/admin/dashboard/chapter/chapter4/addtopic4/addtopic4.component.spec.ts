import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtopic4Component } from './addtopic4.component';

describe('Addtopic4Component', () => {
  let component: Addtopic4Component;
  let fixture: ComponentFixture<Addtopic4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtopic4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtopic4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
