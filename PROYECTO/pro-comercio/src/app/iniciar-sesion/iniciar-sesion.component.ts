import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { registroServices } from '../services/registro.service';
import { ActivatedRoute, Params } from '@angular/Router';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  contrasena;
  usuario;
  adminuser = '';
  adminpass = '';
  iduser;
id;

  constructor(
    private readonly _router: Router,
    private readonly _registroServices: registroServices,
    private rutaDatos: ActivatedRoute
    ) { }

  ngOnInit(): void {
   
  }
  validarcontra() {
    this._registroServices
      .metodoget(`http://localhost:1337/Perfil?nombre=` + this.usuario)
      .subscribe((resultadoMetodoGet) => {
        console.log('resultadoMetodoGet');

        console.log(resultadoMetodoGet)
        this.adminuser = (resultadoMetodoGet[0].nombre);

        this.adminpass = (resultadoMetodoGet[0].contrasenia)
        console.log('nombre y usuario');

        console.log(this.adminuser)
        console.log(this.adminpass)
        this.iduser = (resultadoMetodoGet[0].cliente[0].id)
        console.log('usuario')
        console.log(this.iduser)
        if (this.contrasena === 'admin' && this.usuario === 'admin') {
          alert('ADMINNISTRADOR')
          this._router.navigate(
            [`/admin/` + this.iduser]
          )
        } else if (this.usuario === this.adminuser && this.contrasena === this.adminpass) {
          alert('Bienvenido:' + this.adminuser)
          this._router.navigate(

            [`/inicio/` + this.iduser]
          )

        } else {
          alert('USUARIO NO EXISTE')

        }
      });
  }
}