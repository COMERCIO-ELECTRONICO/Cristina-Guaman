const  EventEmitter  =  require ( 'eventos' );

clase  entrarALaCasa  extiende EventEmitter  { }

const  entrarCasa  =  nuevo  entrarALaCasa ()
var  nombreEvento  =  'entrar por la puerta de adelante hola'
// evento que escucha
// EN
entrarCasa . en ( nombreEvento ,  ( nombre )  =>  {
    consola . log ( `saludar a $ { nombre } , que ingreso por la puerta de adelante` ) ;
} )

// evento que emite
// EMIT
entrarCasa . emitir ( nombreEvento ,  'kevin' )