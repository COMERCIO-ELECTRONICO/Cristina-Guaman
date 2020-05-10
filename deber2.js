const invertirPalabra = palabra => palabra.split("").reverse().join("");
let palabra = "COMERCIO ELECTRONICO";
console.log("PALABRA INVERTIDA:", invertirPalabra(palabra));


let texto="Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido que combina detección de fase y contraste de una función de Superresolución que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles con más detalle."
let mayuscula = (texto)=>{
let Ppalabra = texto.split(" ")[0]
return Ppalabra
}



console.log("Palabra1:",mayuscula(texto).toUpperCase());


let ultimaPa = (texto)=>{
    let Array = texto.split(" "),
    Upalabra = Array[Array.length -1]
    return Upalabra
}


console.log("Palabra2:",ultimaPa(texto.toUpperCase()));

let mitad = (texto)=>{
    let PMitad = texto.split(" "),
    media = PMitad[(PMitad.length -1)/2]
    return media
}
console.log("Palabra3:",mitad(texto.toUpperCase()));

function contar(texto, caracter) {
    return [...texto].filter(l => l === caracter).length;

}
var result = contar("Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido que combina detección de fase y contraste de una función de Superresolución que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles con más detalle.", ",");
console.log('Total Comas: ' + result);

var resu = contar("Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido que combina detección de fase y contraste de una función de Superresolución que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles con más detalle.", ".");
console.log('Total Puntos: ' + resu);