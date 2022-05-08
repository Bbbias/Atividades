const numeros = [0,2,88,56,33,42,67,3,9,0,2];

function primeiro(valor){
    return valor > 50
};

const resultado = numeros.find(primeiro)

console.log(resultado)