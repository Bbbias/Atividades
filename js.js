var sorteados = [
    [1, 44, 6, 2, 45, 60],
    [10, 21, 55, 25, 34, 44],
    [ 8, 18, 28, 29, 55, 59],
    [60, 25, 11, 34, 6, 9],
    [55, 43, 25, 12, 7, 11]
    ];
  
    function numero(sorteados){
       var contar = 0
      for(var sorteio = 0; sorteio<sorteados.length; sorteio++){
        for(var indice =0; indice < sorteados[sorteio].length; indice++){
          if(sorteados[sorteio][indice] == 25){
            
            contar = contar +1
          }
        }
    }
     return contar
  }

  var valor = numero(sorteados)
  console.log(valor)
