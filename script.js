// função para calcular o IMC e a sua classificação.
// peso e altura devem ser passados como argumentos da função.
// retorna um objeto contendo o IMC e a sua classificação.
// IMC = peso / (altura * altura)
// classificação: abaixo do peso, peso normal, sobrepeso e obesidade.
function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura); // constante (imc) para o calculo do IMC.
  let classificacao; // variável (classificacao) para a classificação do IMC. let sendo usado dentro do bloco de código.

  if (imc < 18.5) {
    // condicinais para a classificação do IMC.
    // classificação abaixo do peso.
    classificacao = "abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    // classificação peso normal.
    classificacao = "peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    // classificação sobrepeso.
    classificacao = "sobrepeso";
  } else if (imc >= 30) {
    // classificação obesidade.
    classificacao = "obesidade";
  }
  return {
    // retorna um objeto contendo o IMC e a sua classificação.
    imc: imc.toFixed(2), // arredonda o calculo do IMC para 2 casas decimais.
    classificacao: classificacao, // retorna a classificação do IMC.
  };
}

const exemplos = [
  // array de objetos (exemplos) para testar a função.
  { peso: 50, altura: 1.6 },
  { peso: 70, altura: 1.75 },
  { peso: 90, altura: 1.8 },
  { peso: 110, altura: 1.7 },
];

exemplos.forEach((exemplo) => {
  // percorre cada objeto (exemplo) do array.
  const resultado = calcularIMC(exemplo.peso, exemplo.altura); // constante (resultado) para o calculo do IMC e a sua classificação.
  console.log(
    `Peso: ${exemplo.peso}kg, Altura: ${exemplo.altura}m -> IMC: ${resultado.imc}, Classificação: ${resultado.classificacao}`
  ); // imprime o calculo do IMC e a sua classificação usando `template literals`.
});

const resultado = calcularIMC(85, 1.8); // constante (resultado) para o calculo do IMC e a sua classificação.

console.log(
  `\nO cálculo do IMC para os valores referidos são: IMC: ${resultado.imc}, Classificação: ${resultado.classificacao}.`
); // imprime o calculo do IMC e a sua classificação.
