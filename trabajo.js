// JavaScript source code
// Llaves {}[]
var json = {
    nombre: "Cristina",
    edad: 21,
    soltera: true,
    fecha: new Date ("1998/11/07"),
}

json.nombre = "nuevo"
json.direccion = "Tumbaco"
delete json.direccion
console.log(json)
/*console.error()
console.info()
console.warn()*/

var json2 = {
    nombre: "Cristina",
    edad: 21,
    soltera: true,
    fecha: new Date ("1998/11/07"),
    interese: {
        hobbies: [
            'futbol',
            'ps4'
        ],
        peliculas: [
            {
                nombre: '',
                tipo: '',
                esBuena: true,
            },
            {
                nombre: '',
                tipo: '',
                esBuena: true,
            }
        ]
    },
    familia: [
        {
            nombre: '',
            edad: 1,
        },
        {
            nombre: '',
            edad: 1,
        }
    ]
}//stringify: le hace todo string
var jason2String = JSON.stringify(json2)
console.log(json2)
console.log(jason2String)
// parse
var jsonParse = JSON.parse(jason2String)
console.log(jsonParse)
