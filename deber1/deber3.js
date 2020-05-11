
var arregloUsuarios = [nombre, edad, fechaNacimiento, Telf]
function listarUsuarios(arreglo, cb){
    arreglo
    .forEach(
        usuario => {
            console.log(usuarios);
        });
        cb({
            mensaje: 'Lista de usuarios'

        })
}
listarUsuarios(arregloUsuarios,(respuestaMensaje)=>{
    console.log(respuestaMensaje);
})