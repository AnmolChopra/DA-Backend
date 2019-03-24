import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addquiz10Component } from './addquiz10.component';

describe('Addquiz10Component', () => {
  let component: Addquiz10Component;
  let fixture: ComponentFixture<Addquiz10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addquiz10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addquiz10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
