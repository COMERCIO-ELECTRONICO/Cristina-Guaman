import { EditarComponent } from './editar/editar.component';
import { CrearComponent } from './../usuario/crear/crear.component';
import { ListarComponent } from './../usuario/listar/listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'listarpokemon',
    component: ListarComponent
  },
  {
    path: 'crearpokemon',
    component: CrearComponent
  },
  {
    path: 'editarpokemon',
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
