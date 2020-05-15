import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';

  tituloPadre = 'soy tu padre';
  nombreBotonPadre = 'alerta';
  imagenPadre = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fas.com%2Ffutbol%2F2020%2F01%2F27%2Falbum%2F1580109965_448579.html&psig=AOvVaw2ic8jvPj_HwpbikEocEI1j&ust=1589611137397000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJi4qpGhtekCFQAAAAAdAAAAABAy";

    obtenerRespuestaHijo(evento){
      console.log(evento)
    }



}

