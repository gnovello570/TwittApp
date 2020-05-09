import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioPComponent } from './layout/inicio-p/inicio-p.component';
import { PerfilPComponent } from './layout/perfil-p/perfil-p.component';
import { NotificacionesPComponent } from './layout/notificaciones-p/notificaciones-p.component';
import { MensajesPComponent } from './layout/mensajes-p/mensajes-p.component';
import { TwitPComponent } from './layout/twit-p/twit-p.component';



const routes: Routes = [
  { path: 'inicio', component: InicioPComponent },
  { path: 'explorar', component: PerfilPComponent },
  { path: 'notificaciones', component: NotificacionesPComponent },
  { path: 'mensajes', component: MensajesPComponent },
  { path: 'perfil', component: PerfilPComponent },
  { path: 'twit', component: TwitPComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
