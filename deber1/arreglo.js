 var json = {
    arreglos: {
      uno: [2, 4, 5, 8, 6, 9, 10],
      dos: [
        { valor: 1 },
        { valor: 4 },
        { valor: 2 },
        { valor: 24 },
        { valor: 100 },
        { valor: 23 },
        { valor: 45 },
        { valor: 23 },
      ],
    },
  };
 var Arr1 = json.arreglos.uno.map((item, index, arreglo) => {
    return item * 2;
  });
  console.log("Arr * 2")
  console.log(Arr1)
   var Arr2 = json.arreglos.uno.filter((item, valor, arreglos) => {
    return valor === 2 || valor === 4 || valor === 6 
  });

  console.log(Arr2)
   var Arr3 = json.arreglos.dos.filter((item, valor, arreglos) => {
    return valor === 1 || valor === 3 || valor === 5 || valor === 7;
  });
  console.log(Arr3)
  var Arr4 = json.arreglos.dos.map((item, index, arreglos) => {
    return item.valor + 2;
  });
  console.log(Arr4);