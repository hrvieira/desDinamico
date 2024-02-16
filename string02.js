var nomes = [
  'Ana',
  'João',
  'Eva',
  'Paula',
  'Luís',
  'Pedro',
  'Maria'
];

var nome = [];

for(let i = 0; i < nomes.length; i++){
  if(nomes[i].length == 5) {
    nome += nomes[i].toUpperCase();
  } else {
    nome += nomes[i];
  }

  if (i < nomes.length - 1) {
    nome += ', ';
  }
}

console.log(nome); 