# iTalents - Desafio 1

# Calculadora de IMC

Este projeto contém um script para calcular o Índice de Massa Corporal (IMC) e classificar o resultado com base nos critérios de peso estabelecidos pela Organização Mundial da Saúde (OMS).

## Estrutura do Projeto

- `script.js`: Script JavaScript que contém a lógica de cálculo do IMC.

## Funcionalidades

- Receber o peso (em quilogramas) e a altura (em metros ou centímetros) como parâmetros.
- Calcular o IMC utilizando a fórmula: `IMC = peso / (altura * altura)`.
- Determinar a classificação do IMC de acordo com os seguintes critérios:
  - Abaixo do peso: IMC < 18.5
  - Peso normal: 18.5 ≤ IMC < 24.9
  - Sobrepeso: 25 ≤ IMC < 29.9
  - Obesidade: IMC ≥ 30
- Exibir o resultado do IMC e a classificação correspondente.

## Como Usar

### Executando com Node.js

1. **Instale o Node.js**:
   - [Baixe e instale o Node.js](https://nodejs.org/).

2. **Clone o repositório**:
   ```sh
   git clone https://github.com/AlexSnider/iTalents-ATVD1
   cd iTalents-ATVD1
   
3. **Testes**
   - O script script.js inclui exemplos de teste para a função de cálculo do IMC.
   - Garante que a função seja chamada com diferentes valores de peso e altura e que os resultados sejam exibidos no console do navegador ou terminal.

## Licença
Esse projeto está sob lincença [MIT](https://github.com/AlexSnider/iTalents-ATVD1/blob/main/LICENSE).
