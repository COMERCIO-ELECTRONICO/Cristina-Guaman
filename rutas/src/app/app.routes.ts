import {NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';
const rutas: Routes = [
    {
        path: 'inicio',
        component: HomeComponent
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