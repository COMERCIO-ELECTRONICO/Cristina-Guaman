var arregloNumero = [1, 2, 3, 4];
//console.log(arregloNumero);
//index0f, encuentra el indice del elemento
//console.log(arregloNumero.indexOf(0))
//a;adir elementos, push
//console,log(arregloNumero.push(10))
//console.log(arregloNumero)
//acceder elementos
//console.log(arregloNumero[2])
// slice => dicidir el vector original;
var arregloSlice = arregloNumero.rebanada(0, 1)
//console.log(arregloSlice);
//console.log(arregloNumero);
// splice => agrega y elimina el vector original;
//var arregloSplice = arregloNumero.splice(0, 2)
//console.log(arregloSplice);
//console.log(arregloNumero);

//pop => elimina ultimo elemento
//console.log(arregloNumero.pop())
//console.log(arregloNumero())


 var arrelo2 = ['Cristina',1, true, { numero: 1} ]
 /*arrelo2
 //ForEachejecuta en la funcion indicada una vez por cada elemento del array
 .forEach(
     function(item,indice, arreglo){
         console.log('item: '+ item);
         console.log('indice: ' + indice);
         console.log('arreglo: '+ arreglo);
     }
     )*/
     // map => retorna un arreglo muta o modifica el arreglo

    /* var arregloMutado = arreglo2
     .map(
         (item,indice,arreglo)=>{
             console.log(item)
             if(item === 2){
                 devolver articulo +2
             }

               devolver artículo + 1;
        }
    )

     console.log(arregloMutado);*/
 // filter => retorna arreglo dependiente de la condicion
 /*var arregloFilter = arreglo2
            .Filter(
     (item, valor, arreglo)=>{
         devolver artículo <3
        }
    )
console.log (arregloFilter); * /

// find => retorn un valor
/ * var valorFind = arreglo2
    .encontrar(
        (item, indice, arreglo) => {
            artículo devuelto === 1
        }
    )
    console.log (valorFind); * /
    // every y some
    //every= verifica si todo los valores cumplen con el 
    //true, false
    //some verifica si almenos tods los valores cumplen
    
  // todos y algunos
// cada verificación si todo los valores corresponden a una condición 
// verdadero Falso
// algunos verifica si almenos uno requerido una condicion 

*/
var  operadoresMapyFilter  =  arreglo2
    . mapa (
        ( artículo )  =>  {
            devolver el  artículo * 2 ;
        }
    ) . filtro (
        ( artículo )  =>  {
             artículo  devuelto ==  4
        }
    )
/*
        var arregloReduce = [ 2,1,11,3,45]

var valorSumaArreglo = arregloReduce
.reduce(
    (acumulador, item, indice, arreglo) => {
        return acumulador + item
    }, 0 //es valor inicial del acumulador
)

console.log(valorSumaArreglo)
    )







