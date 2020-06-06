import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  nombre = '';
  apellido = '';
  cedula = '';
  telefono = '';
  usuario = '';
  direccion = '';
  pass='';
  confimarPassword='';
  constructor() { }

  ngOnInit(): void {
  }
  crear() {
    if (this.pass === this.confimarPassword) {
      alert('Contraseñas validas');
    } else {
      alert('Contraseñas no validas');
    }
  }

}
