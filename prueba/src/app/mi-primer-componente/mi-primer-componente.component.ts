import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit {
    @Input() titulo: string;
    @Input() nombreBoton: string;
    @Input() imagenPath: string;
    @Input() datos: Object;

    constructor() { }
  
    ngOnInit() {
  
  }
  SALUDAR(){
    alert('Hola :)');
  
  }

}