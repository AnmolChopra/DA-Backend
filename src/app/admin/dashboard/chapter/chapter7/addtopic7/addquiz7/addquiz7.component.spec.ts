import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addquiz7Component } from './addquiz7.component';

describe('Addquiz7Component', () => {
  let component: Addquiz7Component;
  let fixture: ComponentFixture<Addquiz7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addquiz7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addquiz7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
