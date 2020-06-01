import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { LoginGuard } from './guards/login.guard';

const rutas: Routes = [
    {
        path: 'inicio',
        component: HomeComponent,
    },
    {
        path: 'inicio-sesion',
        component: InicioSesionComponent,
    },
    {
        path: 'estudiante/perfil',
        component: PerfilUsuarioComponent,
      },
      {
          path: 'usuario',
          loadChildren:()=>
           import('./usuario/usuario.module')
          .then(mod => mod.UsuarioModule),

      },
      {
          path: 'profesor/perfil',
          component: PerfilUsuarioComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NoEncontradoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    providers: [],
    exports: [RouterModule],
})
export class AppRoutes { }