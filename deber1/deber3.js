
var json = {
    arreglos: {
        usuario: ["Cristina", "21", "1998/11/07", "0979825768"],

    },
};

function anadirUsuario(arreglo, nombre, edad, fechaNacimiento, Telf, indice, cb) {
    //arreglo.push(nombre);
    arreglo[indice]= nombre, edad, fechaNacimiento, Telf
    cb(
        {
            mensaje: 'Se agrego con exito',
            arreglo
        }
    )
}

var indice = json.arreglos.usuario.indexOf("Cristina");
if(indice !== -1){
  console.log(" Se agrego");
}else{

anadirNombre(json.arreglo.usuario, 'Cristina', '21', '1998/11/07', '0979825768', (mensaje) => {
    console.log(mensaje);
})
}
function ListaUsuarios(arreglo, cb){
    arreglo
    .forEach(
        usuario => {
            console.log(usuario);
        });
        cb({
            mensaje: 'lista de usuario'

        })
}
ListaUsuarios(json.arreglos.usuario, (respuestaMensaje) => {
    console.log(respuestaMensaje);
});

function editarUsuario(arreglo,nombre,edad,fechaNacimiento,Telf,indice,indice2,indice3,indice4,m) {

    arreglo[indice] = nombre
  
    arreglo[indice2] = edad
  
    arreglo[indice3] = fechaNacimiento
  
    arreglo[indice4] = Telf
  
    m({
      mensaje: "se edito correctamente",
      arreglo,
    });
  }
  
  editarUsuario(json.arreglos.usuario, "Andres",'23','1999/12/18','0985412330',0,1,2,3,(respuestaMensaje) => {
    console.log(respuestaMensaje);
  });
  
  
  function eliminarUsuario(arreglo,nombre,edad,fechaNacimiento,Telf,indice,indice2,indice3,indice4,m) {
  
    arreglo[indice] = nombre
  
    arreglo[indice2] = edad
  
    arreglo[indice3] = fechaNacimiento
  
    arreglo[indice4] = Telf
    m({
      mensaje: "Se elimino",
      arreglo,
    });
  }
  
  eliminarUsuario(json.arreglos.usuario, "",'','','',0,1,2,3,(respuestaMensaje) => {
    console.log(respuestaMensaje);
  }); 
