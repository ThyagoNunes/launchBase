// console.log  console = objeto e .log = funcionalidade ( método )
// objeto coleção de propriedades que recebe valores ou funcionalidades

const aluno01 = { 
    nome: 'Thyago',
    nota:   9.8,
}

const aluno02 = {
    nome: 'Marcela',
    nota:   10,
}

const aluno03 = {
    nome: 'Fulano',
    nota:   2,
}

const media = ( aluno01.nota + aluno02.nota + aluno03.nota ) / 3;

console.log(`Média da turma é ${media.toFixed(2)}`);