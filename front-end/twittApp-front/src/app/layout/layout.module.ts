import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from "./sidenav/sidenav.component";
import { TwitGralComponent } from './twit-gral/twit-gral.component';
import { MytwitComponent } from './mytwit/mytwit.component';
import { MainComponent } from './main/main.component';
import { TodoComponent } from './todo/todo.component';
import { TopbarComponent } from './topbar/topbar.component';
import { InicioPComponent } from './inicio-p/inicio-p.component';
import { ExploraPComponent } from './explora-p/explora-p.component';
import { MensajesPComponent } from './mensajes-p/mensajes-p.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificacionesPComponent } from './notificaciones-p/notificaciones-p.component';
import { PerfilPComponent } from './perfil-p/perfil-p.component';
import { TwitPComponent } from './twit-p/twit-p.component';

@NgModule({
  declarations: [
    SidenavComponent,
    TwitGralComponent,
    MytwitComponent,
    MainComponent,
    TodoComponent,
    TopbarComponent,
    InicioPComponent,
    ExploraPComponent,
    MensajesPComponent,
    NavbarComponent,
    NotificacionesPComponent,
    PerfilPComponent,
    TwitPComponent,
    TwitPComponent
  ],
  exports: [
    SidenavComponent,
    TwitGralComponent,
    MytwitComponent,
    MainComponent,
    TodoComponent,
    TopbarComponent,
    InicioPComponent,
    ExploraPComponent,
    MensajesPComponent,
    NavbarComponent,
    NotificacionesPComponent,
    PerfilPComponent,
    TwitPComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
