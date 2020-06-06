import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import{DescripcionComponent}from'./descripcion/descripcion.component';
const rutas: Routes = [
    {
        path: 'inicio/:id',
        component: HomeComponent,
    },
    {
        path: 'list-user/:id',
        component: AdminUserComponent,
    },
    {
        path: 'iniciar-sesion',
        component: IniciarSesionComponent,
    },
    {
        path: 'descripcion/:id',
        component: DescripcionComponent,
    },
    {
        path: 'admin/:id',
        component: AdminComponent,
    },
    {
        path: 'usuario',
        component: PerfilUsuarioComponent,
    },
    {
        path: 'perfil',
        component: PerfilUsuarioComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        redirectTo: 'iniciar-sesion',
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