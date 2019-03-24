import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addquiz11Component } from './addquiz11.component';

describe('Addquiz11Component', () => {
  let component: Addquiz11Component;
  let fixture: ComponentFixture<Addquiz11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addquiz11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addquiz11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
