<<<<<<< 3f06fabfa61aa14beb3fbb42a5f76342bacbb1dc
const  EventEmitter  =  require ( 'eventos' );
=======
const EventEmitter = require('events')
>>>>>>> trabajo

class entrarALaCasa extends EventEmitter { }

const entrarCasa = new entrarALaCasa()
var nombreEvento = 'entrar por la puerta de adelante hola'
// evento que escucha
// ON
entrarCasa.on(nombreEvento, (nombre) => {
    console.log(`saludar a ${nombre}, que ingreso por la puerta de adelante`);
})

// evento que emite
// EMIT
entrarCasa.emit(nombreEvento, 'Cistina')