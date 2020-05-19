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
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent

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