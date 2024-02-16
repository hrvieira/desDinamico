const frase = "Olá mundo";

console.log(frase.indexOf("Olá"));

console.log(frase.substring(0,4));
console.log(frase.substring(0,4).length);

let pessoal = frase.substring(0,4).concat("pessoal".toUpperCase());

console.log(pessoal);

console.log(pessoal.length);

// Método do professor

if(frase.startsWith("Olá")){
  let sub = frase.substring(4);

  let novaString = sub.replace("mundo", "pessoal");

  let novaStringMaiuscula = novaString.toLowerCase();
  console.log(novaStringMaiuscula);   
}