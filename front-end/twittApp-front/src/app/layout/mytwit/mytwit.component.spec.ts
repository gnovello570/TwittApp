import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytwitComponent } from './mytwit.component';

describe('MytwitComponent', () => {
  let component: MytwitComponent;
  let fixture: ComponentFixture<MytwitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytwitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytwitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
