import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitPComponent } from './twit-p.component';

describe('TwitPComponent', () => {
  let component: TwitPComponent;
  let fixture: ComponentFixture<TwitPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
