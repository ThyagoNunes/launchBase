const nome = "Thyago";
const peso = 104;
const altura = 1.9;
const sexo = "Masculino";

const imc = peso / Math.pow(altura, 2); // Math.pow(x,elevadoNoX)
console.log(imc.toFixed(2)); // toFixed(2) fixar apenas 2 casas decimais após a vírgula

if (imc >= 30) {
  console.log(`${nome} você está acima do peso `); // template string
} else {
  console.log(`${nome} você não está acima do peso`);
}
