import { registroServices } from './../services/registro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { ActivatedRoute, Params } from '@angular/Router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostrar:boolean=false;
  nombrepro;
  marca;
  tipo;
  cantidad;
  producto;
  datosmarca;
  descripciom;
  datos;
  vermarca;
  verdescripcion;
  fech;
  iduser;
  datosprocduc;
  idmarca;
  iddesc;


  constructor(
    private readonly _registroServices: registroServices,
    private rutaDatos: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    
    
    this.iduser = {
      id: this.rutaDatos.snapshot.params.id,
    };
    this._registroServices
      .metodoget('http://localhost:1337/Producto')
      .subscribe((resultadoMetodoGet:any) => {
        this.producto = (resultadoMetodoGet)
this.datosmarca=(resultadoMetodoGet.marca)
this.descripciom=(resultadoMetodoGet.descripcion)
       
       console.log(this.producto);
       console.log(this.datosmarca);
       console.log(this.descripciom);

      });

    
  }
  modal(){
    this.mostrar=true
  }
  eviar(){

    this._router.navigate( 
      ['/descripcion/'+this.iduser.id]
    )


  }

  comprar(datos){
    // this._registroServices
    // .metodoget('http://localhost:1337/Marca')
    // .subscribe((resultadomarca:any)=>{
    //   this.datosmarca=(resultadomarca.id)

    //   this._registroServices
    //   .metodoget('http://localhost:1337/Descripcion')
    //   .subscribe((resultadodescripcion:any)=>{
    //     this.descripciom=(resultadodescripcion.id)
     
    //     this._registroServices
    //     .metodopost('http://localhost:1337/Descripcionpro',{
    //       productoid:datos,
    //     descripcionid:this.descripciom,
    //     marcaid:this.datosmarca
    //     })
    //     .subscribe((resultadodespro)=>{
    //       console.log(resultadodespro)
    //     })
    //   })
      
     

    // })
  
    
    alert('PRODUCTO COMPRADO')
   
    

  }

}
