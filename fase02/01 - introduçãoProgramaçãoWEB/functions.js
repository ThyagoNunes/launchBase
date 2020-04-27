// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média
const studentsClassA = [
  { name: "thyago", note: 10 },
  { name: "marcela", note: 8 },
];

const studentsClassB = [
  { name: "arrom", note: 10 },
  { name: "zezinho", note: 8 },
  { name: "fulaninho", note: 1 },
  { name: "siclaninho", note: 1 },
  { name: "juninho", note: 1 },
];

console.table(studentsClassA);
console.table(studentsClassB);

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

const averageClassB = returnAverage(studentsClassB);
sendMessage(averageClassB, "class B");

function sendMessage(average, averageClass) {
  if (average >= 5) {
    console.log(`average ${averageClass}: ${average}, Congrats! `);
  } else {
    console.log(`average ${averageClass}: ${average}, more study! `);
  }
}
