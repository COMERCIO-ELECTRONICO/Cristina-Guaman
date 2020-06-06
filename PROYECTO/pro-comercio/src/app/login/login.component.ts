import {  registroServices} from './../services/registro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //credenciales
  nombre = '';
  apellido = '';
  cedula ;
  telefono ;
  usuario = '';
  direccion = '';
  pass='';
  confimarPassword='';
  correo = '';
  seleccionadoValor;
  idperf;
  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['Admin', 'Cliente'];
  constructor(
    private readonly _router: Router,
    private readonly _registroServices:registroServices
  ) { }

  ngOnInit(): void { 
    this._registroServices
    .metodoget('http://localhost:1337/perfil')
    .subscribe((resultadoMetodoGet) => {
      console.log('Respuest de Get');
      console.log(resultadoMetodoGet);
      
    });

  }
  
  buscarSugerencia(evento) {
    console.log(evento.query);
    if (evento.query !== '') {
      const valorEncontrado = this.sugerencias.find((item) => {
        return item === evento.query;
      });
      console.log(valorEncontrado);
      this.arregloResultado.push(valorEncontrado);
      this.sugerencias = this.arregloResultado;
    } else {
      this.sugerencias = ['Admin', 'Cliente'];
    }
    /*this.sugerencias
    = ['hola'];*/
  }

  valorSeleccionado(evento) {
    console.log(evento);
    this.seleccionadoValor = evento;
  }
  info() {
    ['./usuario/usuario.module']
  }
  
  crear() {
    if(this.direccion ===''){
      alert('llenar campo')
          }else
    if(this.telefono >= 11){
alert('ingrese solo numeros')
    }else
    if(this.apellido ===''){
alert('llenar campo')
    }else
if(this.nombre===''){
  alert ('usuario no ingresado')

} else if(this.pass==='' && this.cedula >=11){
alert('')
}else{
  this._registroServices
  .metodopost('http://localhost:1337/Perfil',{
    nombre:this.usuario,
    contrasenia:this.pass
    
  
  })
  .subscribe((resultadoperfil:any) => { 
this.idperf=resultadoperfil.id
console.log(this.idperf)
    this._registroServices
    .metodopost('http://localhost:1337/Clientes',{
      nombre:this.nombre,
      apellido:this.apellido,
      cedula:this.cedula,
      telefono:this.telefono,
      direccion:this.direccion,
       idperfil:this.idperf
  
    })
    .subscribe((resultadoPost:any)=>{      
      this._router.navigate(
        ['/iniciar-sesion']
        )
console.log(resultadoPost)
    })
  });



}


    

  }
}


