import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  tituloPadre = 'soy tu padre hola';
  nombreBotonPadre = 'alertar!!';
  imagenPadre = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  datosHijo = {
    tituloPadre: 'soy tu padre hola',
    nombreBotonPadre: 'alertar!!',
    imagenPadre: 'https://es.wikipedia.org/wiki/Angular_(framework)#/media/Archivo:Angular_full_color_logo.svg',
  };


  obtenerRespuestaHijo(evento) {
    console.log(evento)
  }
}