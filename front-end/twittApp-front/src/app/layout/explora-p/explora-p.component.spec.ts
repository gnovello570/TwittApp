import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploraPComponent } from './explora-p.component';

describe('ExploraPComponent', () => {
  let component: ExploraPComponent;
  let fixture: ComponentFixture<ExploraPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploraPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploraPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
