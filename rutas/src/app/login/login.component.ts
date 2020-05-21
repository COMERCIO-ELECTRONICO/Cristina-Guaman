import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  email = '';
  contrasena = '';
  nombre='';
  apellido='';
  usuario='';
  emailt='';
  password='';
  password2='';


  ngOnInit(): void {
  }

  obtenerFormulario(formulario){
    console.log(formulario);
    alert(
      'correo: ' +
        formulario.controls.email.value +
        'password: ' +
        formulario.controls.contrasena.value
    );
  }

  obtenerFormularioDeber(formulario){
    console.log(formulario);
    alert(
      'nombre:' +
        formulario.controls.nombre.value +
      'apellido'+
        formulario.controls.apellido.value +
      'usuario' +
      formulario.controls.usuario.value +
      'correo: ' +
        formulario.controls.emailt.value +
        'password: ' +
        formulario.controls.password.value +
      'password2' +
      formulario.controls.password2.value
    );
  }
}