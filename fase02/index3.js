// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média
// Se a média for maior que 5 parabenizar a turma

const aluno01 = 'Thyago';
const notaAluno01 = 10.0;

const aluno02 = 'Marcela';
const notaAluno02 = 1.0;

const aluno03 = 'fulano';
const notaAluno03 = 2.0;    // nota baixa

const mediaTurma = ( notaAluno01 + notaAluno02 + notaAluno03 ) / 3 ;

if(mediaTurma > 5){
    console.log(`A média da turma foi ${mediaTurma.toFixed(2)}. Parabéns! `);
}else{
    console.warn(`A média da turma foi ${mediaTurma.toFixed(2)}. Que coisa feia... `);
}
