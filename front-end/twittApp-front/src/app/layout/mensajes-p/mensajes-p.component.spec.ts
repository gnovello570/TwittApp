import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesPComponent } from './mensajes-p.component';

describe('MensajesPComponent', () => {
  let component: MensajesPComponent;
  let fixture: ComponentFixture<MensajesPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
