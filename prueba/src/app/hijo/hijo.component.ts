import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }
  @Input() valorDelPadre:string;
  @Input() nombreBotonDeber:string;
  @Input() edadPadre:number;
  @Output() calcular= new EventEmitter
  edad:number;

  nombreBoton='';
  
  ngOnInit(): void {
  }

  alertaValorPadre(){
    alert(this.valorDelPadre)
  }

  calcularEdad(){
    this.edad=2020-this.edadPadre
     this.calcular.emit(this.edad)
  }
}