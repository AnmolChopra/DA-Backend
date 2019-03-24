import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addquiz8Component } from './addquiz8.component';

describe('Addquiz8Component', () => {
  let component: Addquiz8Component;
  let fixture: ComponentFixture<Addquiz8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addquiz8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addquiz8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
