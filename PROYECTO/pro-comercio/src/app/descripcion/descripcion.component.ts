import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/Router';
import { Router } from '@angular/Router';
import { LoginServices } from '../services/login.services';
@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  nombre;
  apellido;
  cedula;
  telefono;
  direccion;
  usuario;
  pass;
  datosdescripcion;
  datosperfil;
  iduser;
  constructor(
    private readonly _router: Router,
    private readonly _LoginServices: LoginServices,

    private readonly _ActivatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.iduser = {
      id: this._ActivatedRoute.snapshot.params.id,
    };

    this._LoginServices
      .metodoget('http://localhost:1337/Clientes/'+ this.iduser.id)
      .subscribe((respuestodescripcion) => {
        this.datosdescripcion = (respuestodescripcion)
        console.log(this.datosdescripcion)
        this._LoginServices
          .metodoget('http://localhost:1337/Perfil/'+ this.iduser.id)
          .subscribe((respuestaperfil) => {
            this.datosperfil = (respuestaperfil)
            console.log(this.datosperfil)

          })
      })


  }



  actualizar() {
    if(this.usuario ===''&& this.pass===''){
      alert('usuario y contraseña reqeridas')
    }else{
      this._LoginServices
      .metodoput('http://localhost:1337/Perfil/'+ this.iduser.id, {
  
        nombre: this.usuario,
        contrasenia: this.pass
  
      }).subscribe((resultadoperfilactualizado) => {
        console.log('resultadoperfilactualizado')
        console.log(resultadoperfilactualizado)
      })
      this._LoginServices
        .metodoput('http://localhost:1337/Clientes/'+ this.iduser.id, {
  
          nombre: this.nombre,
          apellido: this.apellido,
          cedula: this.cedula,
          telefono: this.telefono,
          direccion: this.direccion
  
        }).subscribe((resultadoclienteactualizado) => {
          console.log('resultadoclienteactualizado')
          console.log(resultadoclienteactualizado)
        })
     
  
  
    }

    
  }

  regresar(){
    this._router.navigate( 
      ['/inicio/'+this.iduser.id]
    )
  }











}
