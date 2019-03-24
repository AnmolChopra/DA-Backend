import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addquiz5Component } from './addquiz5.component';

describe('Addquiz5Component', () => {
  let component: Addquiz5Component;
  let fixture: ComponentFixture<Addquiz5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addquiz5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addquiz5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
