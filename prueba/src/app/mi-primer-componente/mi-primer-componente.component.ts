import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit {
    @Input() Titulo: string;
    @Input() NombreBoton: string;
    @Input() ImagenPAth: string;



  constructor() { }

  ngOnInit(): void {
  }
  SALUDAR(){
    alert('Hola :)');
  }
}
