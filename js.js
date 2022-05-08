const notas = [10, 9, 10, 7, 6, 8, 9, 10, 7, 9];

function aprovacao(media){
    return media >= 7
};

const result = notas.every(aprovacao)
console.log(result)
