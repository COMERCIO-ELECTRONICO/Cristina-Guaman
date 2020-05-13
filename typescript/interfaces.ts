//interface
interface persona{
    nombre: string,
    apellido:string,
    edad: number,
    esSoltero: boolean
    
}
interface correo{
    email?: string
}
interface trabajo extends correo, persona{
    nombreTrabajo: string
}

const policia: trabajo = {
    apellido:'',
    edad:1,
    esSoltero:false,
    nombre:'',
    nombreTrabajo:''
}