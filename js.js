const nomes = ['kirk', 'spock', 'scott', 'mccoy', 'sulu'];

function maisculo(item, i){
    nomes[i] = nomes[i].toUpperCase();
}

nomes.forEach(maisculo);
console.log(nomes);

