import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addquiz4Component } from './addquiz4.component';

describe('Addquiz4Component', () => {
  let component: Addquiz4Component;
  let fixture: ComponentFixture<Addquiz4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addquiz4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addquiz4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
