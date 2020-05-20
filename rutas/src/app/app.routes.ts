import {NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';
import { NoEncontradoComponent } from './inicio/no-encontrado/no-encontrado.component';
import { LoginComponent } from './login/login.component';
const rutas: Routes = [
    {
        path: 'inicio',
        component: HomeComponent
    },
    {
        path: ':id/inicio',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent

    },
    {
        path: 'usuario',
        loadChildren: ()=>import('./usuario/usuario.module')
        .then(usuario=>usuario.UsuarioModule)

    },
    {
        path: 'pokemon',
        loadChildren: ()=>import('./pokemon/pokemon.module')
        .then(pokemon=>pokemon.PokemonModule)

    },
    {
        path: '**',
        component: NoEncontradoComponent
    }

]
@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    providers: [],
    declarations: [],
    exports: [RouterModule],
})

 export class AppRoutesComponent{

 }