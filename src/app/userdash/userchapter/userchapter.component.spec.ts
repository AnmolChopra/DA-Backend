import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchapterComponent } from './userchapter.component';

describe('UserchapterComponent', () => {
  let component: UserchapterComponent;
  let fixture: ComponentFixture<UserchapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserchapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserchapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
