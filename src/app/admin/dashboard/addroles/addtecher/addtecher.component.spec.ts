import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtecherComponent } from './addtecher.component';

describe('AddtecherComponent', () => {
  let component: AddtecherComponent;
  let fixture: ComponentFixture<AddtecherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtecherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtecherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
