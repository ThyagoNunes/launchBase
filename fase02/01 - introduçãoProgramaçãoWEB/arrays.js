const alunos = [
  {
    nome: "Thyago",
    nota: 9.8,
  },

  {
    nome: "Marcela",
    nota: 10.0,
  },

  {
    nome: "Fulano",
    nota: 2,
  },
];
console.log(alunos);

const nomeDosAlunos = ["thyago", "marcela", "fulano"];
console.log(nomeDosAlunos);
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;

console.log(media.toFixed(2));