//interface
interface persona{//
    nombre: string,
    apellido:string,
    edad: number,
    esSoltero: boolean
    
}
interface correo{///
    email?: string
}
interface trabajo extends correo, persona{
    nombreTrabajo: string
}

const policia: trabajo = {
    apellido:'',
    edad:1,
    esSoltero:false,///
    nombre:'',
    nombreTrabajo:''
}
const valor = '1'; //tipo de casting
//casteo---que tipo de dato va hacer
//as
//valor as number;
//<tipoDato> variable
//valor as trabajo;