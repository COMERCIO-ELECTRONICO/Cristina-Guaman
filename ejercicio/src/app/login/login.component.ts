import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // credenciales

  correo = '';
  pass = '';
  seleccionadoValor;

  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['Cristina', 'cris', 'Alexandra'];

  valorSeleeccionado;

  constructor(
    private readonly _router: Router,
    private readonly _loginService: LoginService


  ) {}

  ngOnInit(): void {
    this._loginService
    .metodoPost(
      'http://localhost:1337/usuario',
      {
        nombre: "Cristina",
        edad: 21,
        correo: 'Cris',
        esCasado: false
      }
    )
    .subscribe(
      (resultadoPost) => {
        console.log('Respuest de Post');
        console.log(resultadoPost);
      }
    )

  this._loginService
    .metodoGet('localhost:1337/usuario')
    .subscribe((resultadoMetodoGet) => {
      console.log('Respuest de Get');
      console.log(resultadoMetodoGet);
    });
    }

  buscarSugerencia(evento) {
    console.log(evento.query);
    if (evento.query !== '') {
      const valorEncontrado = this.sugerencias.find((item) => {
        return item === evento.query;
      });
      console.log(valorEncontrado);
      this.arregloResultado.push(valorEncontrado);
      this.sugerencias = this.arregloResultado;
    } else {
      this.sugerencias = ['Estudiante','Profesor','cris'];
    }
  }

  valorSeleccionado(evento) {
    console.log(evento);
    this.seleccionadoValor = evento;
  }
  ingresar() {
   
    console.log(this.valorAutocomplete);
    if (this.pass === '1234') {
      alert(this.correo);
      if (this.seleccionadoValor === 'Estudiante') {
        alert('es estudiante');
          this._router.navigate(
            ['/estudiante','perfil']
            )
      }
    }if (this.pass === '1234') {
        if (this.seleccionadoValor === 'Profesor') {
          alert('es profesor');
            this._router.navigate(
              ['/profesor','perfil']
              )
        }
    } else {
      alert('no ingreso');
    }
  }
  eliminarRegitroPorId() {
    this._loginService
      .metodoDelete('http://localhost:1337/usuario/2').subscribe(
        (respuestDelete) => {
          console.log(' repuesta de delete');
          console.log(respuestDelete);
        }
      )
  }
}