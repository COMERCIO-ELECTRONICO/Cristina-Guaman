import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit, OnDestroy {
    @Input() titulo: string;
    @Input() nombreBoton: string;
    @Input() imagenPath: string;
    @Input() datos: object;

    @Output() saludohijo = new EventEmitter();

    fecha = new Date();
  sueldo: number  = 3.1416;
  nombre: string = 'Cristina';

  constructor() { }

  ngOnInit(): void {
    console.log('datos del padre en hijo')
    console.log(this.datos)
  }
  ngOnDestroy(){

  }





  SALUDAR(){
    alert('Hola :)');
    this.saludohijo.emit('saludo de tu hijo');
  }
}
