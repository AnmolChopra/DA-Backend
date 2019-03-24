import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addquiz12Component } from './addquiz12.component';

describe('Addquiz12Component', () => {
  let component: Addquiz12Component;
  let fixture: ComponentFixture<Addquiz12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addquiz12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addquiz12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
