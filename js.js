const pontos = [10, 8, 5, 4, 9, 1, 9, 10, 2, 10];

function valer(ponto){
    return ponto > 5
}

const validos = pontos.filter(valer)

const aprovados = [];
for(let i=0; i<validos.length; i++) {
    const n = validos[i];
    if (n >= 7) {
        aprovados.push(n);
    }
}
console.log(aprovados);

var soma = aprovados.reduce(function (total, valor) {
    return total + valor;
})

console.log(soma) 