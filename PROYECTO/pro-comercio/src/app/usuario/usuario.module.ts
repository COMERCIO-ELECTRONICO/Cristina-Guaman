import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoUserComponent } from './info-user/info-user.component';
import { UsuarioRoutes } from './usuario.routes';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AutoCompleteModule } from 'primeng/autocomplete';
@NgModule({
  declarations: [InfoUserComponent],
  imports: [
    CommonModule,
    UsuarioRoutes,

    ButtonModule,
    FormsModule,
    MatInputModule,
    AutoCompleteModule,
  ],







})
export class UsuarioModule { }
