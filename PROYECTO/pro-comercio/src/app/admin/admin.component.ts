import { registroServices } from './../services/registro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { ActivatedRoute, Params } from '@angular/Router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  mostrar: boolean = false;

  nombrepro;
  marca;
  tipo;
  cantidad;
  producto;//copiar variable
  datosmarca;
  descripciom;
  datos;
  vermarca;
  verdescripcion;
  fech;
  iduser;
  idprocduc;
  idmarca;
  iddesc;
  atualpro;
  id;
  nombremarca;
  tipodes;
  cantidades
  constructor(
    private readonly _registroServices:registroServices,
    private rutaDatos: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this.iduser = {
      id: this.rutaDatos.snapshot.params.id,
    };
    ////hasta akkaa
    this._registroServices
      .metodoget('http://localhost:1337/Producto')
      .subscribe((resultadoMetodoGet) => {
        this.producto = (resultadoMetodoGet)
       console.log(this.producto);
      

      });
      this._registroServices
      .metodoget('http://localhost:1337/Marca')
      .subscribe((resultadoMetodoGet) => {
        this.datosmarca = (resultadoMetodoGet)
       console.log(this.datosmarca);
      

      });
      this._registroServices
      .metodoget('http://localhost:1337/Descripcion')
      .subscribe((resultadoMetodoGet) => {
        this.descripciom = (resultadoMetodoGet)
       console.log(this.descripciom);
      

      });
      ///de aqui
     
  }
  modal() {
    this.mostrar = true
  }


  agregar() {

    this._registroServices
      .metodopost('http://localhost:1337/Marca', {
        nombre_marca: this.marca,

      })
      .subscribe((resultadomarca: any) => {


        this.idmarca = (resultadomarca.id)
        console.log(this.idmarca);


        this._registroServices
          .metodopost('http://localhost:1337/Descripcion', {
            tipo: this.tipo,
            cantidad: this.cantidad,
          })
          .subscribe((resultadodescripciont: any) => {

            this.iddesc = (resultadodescripciont.id)
            console.log(this.iddesc);

            this._registroServices
              .metodopost('http://localhost:1337/Producto', {
                nombre_producto: this.nombrepro,
                marca: this.idmarca,
                descripcion: this.iddesc

              })
              .subscribe((resultadoproducto) => {
                console.log(resultadoproducto);

              })

          })
this._router.navigate(['/admin/'+this.iduser.id])
alert('DATOS AGREGADOS')
      });






  }
  actualizarmarca(marca){
    console.log(marca);
    
    console.log(this.atualpro);
    
    this._registroServices
    .metodoput(`http://localhost:1337/Producto/`+marca, {
     
    nombre_producto:this.nombremarca,

    })
    .subscribe((resultadoproducto) => {
      console.log(resultadoproducto);

    })
  }
  actualizar(datos){
    console.log(datos);
    
   
    
    this._registroServices
    .metodoput(`http://localhost:1337/Producto/`+datos, {
     
    nombre_producto:this.atualpro,

    })
    .subscribe((resultadoproducto) => {
      console.log(resultadoproducto);

    })

  }
  actualizardescripcion(des){
    console.log(des);
  
    this._registroServices
    .metodoput(`http://localhost:1337/Descripcion/`+des, {
      
      tipo:this.tipodes,
      cantidad:this.cantidades
      

    })
    .subscribe((resultadoproducto) => {
      console.log(resultadoproducto);

    })
                              
  }




 eliminarproducto(datos){
this._registroServices
.metododelete(`http://localhost:1337/Producto?id=`+datos)
.subscribe((resultadoeliminar)=>{
console.log(resultadoeliminar);
alert('producto borrado')

});
  }

  eliminarmarca(marca){
    this._registroServices
    .metododelete(`http://localhost:1337/Marca?id=`+marca)
    .subscribe((resultadoeliminar)=>{
    console.log(resultadoeliminar);
    alert('Maca borrada')
  });
  }
  
  eliminardescripcion(descripciom){
    this._registroServices
    .metododelete(`http://localhost:1337/Descripcion?id=`+descripciom)
    .subscribe((resultadoeliminar)=>{
    console.log(resultadoeliminar);
    alert('Descripcion borrada')
  });
  }




  usuarios(){
  this._router.navigate( 
    ['/list-user/'+this.iduser.id]
  )
}

























}
