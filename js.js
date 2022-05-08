
const notas = [8.5, 7.5, 6, 3, 8.5, 10, 10, 9, 4, 7]

function check(media){
    return media > 7}

const aprovados = notas.filter(check)

console.log(aprovados);
