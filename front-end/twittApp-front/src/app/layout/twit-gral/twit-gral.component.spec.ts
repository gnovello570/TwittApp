import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitGralComponent } from './twit-gral.component';

describe('TwitGralComponent', () => {
  let component: TwitGralComponent;
  let fixture: ComponentFixture<TwitGralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitGralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitGralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
