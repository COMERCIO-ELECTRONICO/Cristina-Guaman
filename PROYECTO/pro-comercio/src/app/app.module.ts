
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './login/login.component';
import { AppRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { UsuarioModule } from './usuario/usuario.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from "@angular/common/http";
import{LoginServices}from'./services/login.services'
import{registroServices}from'./services/registro.service';
import {TabViewModule} from 'primeng/tabview';
import {MatExpansionModule} from '@angular/material/expansion';
import { DescripcionComponent } from './descripcion/descripcion.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoEncontradoComponent,
    IniciarSesionComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    AdminComponent,
    AdminUserComponent,
    DescripcionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,//Ruta dinamica
    ButtonModule,
    FormsModule,
    MatInputModule,
    AutoCompleteModule,
    UsuarioModule,
    NgbModule,
    MatButtonModule,
    HttpClientModule,
    TabViewModule,
    MatExpansionModule

  ],
  providers: [
    LoginServices,
    registroServices
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

