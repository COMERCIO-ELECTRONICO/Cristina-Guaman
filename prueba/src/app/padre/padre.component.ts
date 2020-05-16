import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }
  valorDelInput= '';
  valorDelInputEdad= '';
  nombreBoton:string;
  
  edad:number;
  numero: number;


  ngOnInit(): void {
  }
  
  RespuestaHijo(evento){
    this.edad=evento
    console.log(evento)
  }

}