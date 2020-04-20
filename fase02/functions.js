// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média
const studentsClassA = [
  {
    nome: "a",
    note: 10,
  },

  {
    nome: "b",
    note: 9,
  },

  {
    nome: "c",
    note: 8,
  },
];

const studentsClassB = [
  {
    nome: "d",
    note: 5,
  },

  {
    nome: "f",
    note: 4,
  },

  {
    nome: "g",
    note: 3,
  },
];

function returnAverage(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].note;
  }
  const media = sum / students.length;
  return media;
}

const averageClassA = returnAverage(studentsClassA);
sendMessage(averageClassA, "class A");
/* console.log(averageClassA); */

const averageClassB = returnAverage(studentsClassB);
sendMessage(averageClassB, "class B");
/* console.log(averageClassB); */

function sendMessage(average, averageClass) {
  if (average >= 5) {
    console.log(`average ${averageClass}: ${average}, Congrats! `);
  } else {
    console.log(`average ${averageClass}: ${average}, more study! `);
  }
}
