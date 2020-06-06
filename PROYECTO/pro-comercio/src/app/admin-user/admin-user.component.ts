import { registroServices } from './../services/registro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/Router';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  nombre = '';
  apellido = '';
  cedula = '';
  telefono = '';
  usuario = '';
  direccion = '';
datosclientes;
iduser;
  constructor(
    private _router:Router,
private _registroServices:registroServices,
private rutaDatos: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.iduser = {
      id: this.rutaDatos.snapshot.params.id,
    };
    this._registroServices
    .metodoget(`http://localhost:1337/Clientes`)
    .subscribe((resultadoMetodoGet) => {
    this.datosclientes=(resultadoMetodoGet)
    console.log(this.datosclientes);
    
    });


  }
  regresar(){

    this._router.navigate( 
      ['/admin/'+this.iduser.id]
    )
  }

}
