/*======================================================================== 
    OPERADORES DE COMPARAÇÃO

    >       Maior                               console.log( 5 > 4);    // true
    <       Menor                               console.log( 5 < 4);    // false
    >=      Maior ou igual a                    console.log( 5 >= 4);   // true
    <=      Menor ou igual a                    console.log( 4 <= 4);   // true
    ==      Igual a                             console.log( 4 == "4" );      // true
    ===     Igual e do mesmo tipo               console.log( 4 === "4" );     // false
    !=      Diferente de                        console.log( 4 != "5" );      // true
    !==     Diferente, inclusive do tipo        console.log( 4 !== "5" );     // true 
    
========================================================================*/

// DESAFIO 1
const idade = 17;
// Verificar se a pessoa é maior igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
// se a pessoa tiver 17 anos
// avisar pra voltar quando tier 18

if (!(idade >= 18) || idade === 17) {
  console.log("Bloquear a entrada");
} else {
  console.log("Deixar entrar");
}

/*======================================================================== 
    OPERADORES LÓGICOS

    &&  "E" As duas condições devem ser verdadeiras
        para que a condição final seja verdadeira.
    ||  "OU" Uma das condições devem ser verdadeira
        para que a condição final seja verdadeira.
    !   "NÃO" Nega uma condição

========================================================================*/

console.log(5 == 5 && 6 == 6); // true
console.log(5 == 5 && 6 != 6); // false

console.log(5 != 5 || 6 == 6); // true
console.log(5 == 5 || 6 != 6); // true

console.log(!(5 > 6)); // true
console.log(!(5 < 6)); // false

// dar bonificação de 500 reais
// se vendedor possuir 100 ou menos pontos
// m as deve possuir mais de 50 pontos

/*======================================================================== 
    OPERADORES DE ARITMÉTICOS

    *   Multiplicação
    /   Divisão
    %   Resto da divisão
    +   Soma
    -   Subtração

========================================================================*/

console.log(2 * 2); // 4
console.log(2 / 2); // 1
console.log(2 % 1.5); // 0.5
console.log(2 + 2); // 4
console.log(2 - 2); // 0
