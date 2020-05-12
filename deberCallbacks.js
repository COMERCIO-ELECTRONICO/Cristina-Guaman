

var arregloJsons =[// para que se cumpla el .json
{
   nombre: 'Cristina',
   edad: '21',
   fechaNacimiento: new Date (),
   tefl: 0979825768
}]
var usuarioNuevo ={
    nombre: 'Daniel',
    edad: '22',
    fechaNacimiento: new Date (),
    tefl: 0979247901
}
function crearUsuario(arreglo, usuarioCrear, cb){
    var usuarioEncontrado = arreglo
    .find(
        (item) =>{
    return item.nombre === usuarioCrear.nombre
}) 
    //  console.log(usuarioEncontrado);
    if (usuarioEncontrado !== undefined) {
        arreglo.push(usuarioACrear)
        cb({
            mensaje: 'usuario creado',
            usuario: usuarioCrear,
            arreglo
      })
    }else{
        cb({
            mensaje: 'usuario existe',
            usuario: usuarioCrear,
            arreglo

})
    }
}
crearUsuario(arregloJsons, usuarioNuevo, (respuestaCallback) => {
    console.log(`mensaje: ${respuestaCallback.mensaje}, usuario: ${respuestaCallback.usuario}`)
    console.log(respuestaCallback.arreglo)
})
function eliminarUsuario(arreglo, nombreUsuario, cb) {

    var indiceUsuario = arreglo
        .findIndex(
            (item) => {
                return item.nombre === nombreUsuario
            })
    console.log(indiceUsuario);
    if (indiceUsuario !== -1) {
        arreglo.splice(indiceUsuario, 1)
        cb({
            mensaje: 'eliminado'
        })
    } else {
        cb({
            mensaje: 'eliminado no'
        })
    }

}

eliminarUsuario(arregloJsons, 'kevin', (resultadoCallback) => {
    console.log(resultadoCallback)
    console.log(arregloJsons)
})
console.log(arregloJsons)