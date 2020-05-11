//api---- existe diferentes nombres como rest API ccomunicacion entre aplicaciones
//programcion funcional--poedmos hacer una funcion y en esa funcion hacer otra
/*function programacionFuncional(numer), (a)=>{}1, ){
callbacks-- ejecucion de las funciones
}*/
/*function primeraFuncion(){
    setTimeout(()=>{
    console.log('primera')
},500
    )
}
function segundaFuncion(){
    console.log('2')
}
function saluda(nombre, callback) {
    console.log('saludo a', nombre)
    callback()
}

function funcionCallback() {
    primeraFuncion()
    segundaFuncion()
    console.log('ya salude')
}

saluda('Cristina', () => {
console.log('saludaste')
})
})*/

/*function saludar(nombre){
    console.log(`ejecuto saludo a ${nombre}`)
}
function peticionUsuario(nombre, callback){
    callback(nombre)
}
peticionUsuario('Cristina', saludar)
peticionUsuario('Cristina', (saludar)=>{
   console.log(saludar);
})*/
var arreglo = ['andres', 'andres', 'andres']

var nombreNuevo = 'andres'

function anadirNombre(arreglo, nombre, indice, cb) {
    //arreglo.push(nombre);
    arreglo[indice]= nombre
    cb(
        {
            mensaje: 'exito',
            arreglo
        }
    )
}

anadirNombre(arreglo, 'Cristina', 2, (mensaje) => {
    console.log(mensaje);
});

