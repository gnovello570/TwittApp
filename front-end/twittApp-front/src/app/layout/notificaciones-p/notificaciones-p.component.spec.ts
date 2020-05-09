import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesPComponent } from './notificaciones-p.component';

describe('NotificacionesPComponent', () => {
  let component: NotificacionesPComponent;
  let fixture: ComponentFixture<NotificacionesPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionesPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
