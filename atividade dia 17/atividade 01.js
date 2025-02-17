function isPar(numero) {
    return numero % 2 === 0;
  }
  
  function filtrarPares(array) {
    let pares = [];  
    
    for (let i = 0; i < array.length; i++) {
      if (isPar(array[i])) {
        pares.push(array[i]);  
      }
    }
  
    return pares;  
  }
  
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let numerosPares = filtrarPares(numeros);
  console.log(numerosPares);  