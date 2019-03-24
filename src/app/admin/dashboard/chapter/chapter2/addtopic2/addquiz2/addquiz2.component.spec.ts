import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addquiz2Component } from './addquiz2.component';

describe('Addquiz2Component', () => {
  let component: Addquiz2Component;
  let fixture: ComponentFixture<Addquiz2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addquiz2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addquiz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
