import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtopic5Component } from './addtopic5.component';

describe('Addtopic5Component', () => {
  let component: Addtopic5Component;
  let fixture: ComponentFixture<Addtopic5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtopic5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtopic5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
