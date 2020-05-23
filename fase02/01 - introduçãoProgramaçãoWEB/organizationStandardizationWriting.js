const classA = [
  { name: "thyago veigan nunes", note: 10 },
  { name: "marcela xuxu meu", note: 9 },
  { name: "jackson do pandeiro", note: 8 },
  { name: "sarah aventureira", note: 7 },
];

const classAB = [
  { name: "alessandro rapariga das zoropa", note: 6 },
  { name: "ronaldo manja quimica", note: 5 },
  { name: "hugo universe", note: 4 },
  { name: "neto do lolzim", note: 3 },
];

function calculateAverage(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].note;
  }
  const average = sum / students.length;
  return average;
}

function sendMessageForClass(average, nameClass) {
  if (average >= 5) {
    console.log(`${classA} has average: ${average}, congrats ♥☻`);
  } else {
    console.log(`${classA} has average: ${average}, is not good `);
  }
}

function checkStatusStudents(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student);
  }
}

function markAsFlunked(student) {
  student.reproved = false;
  student.approved = false;
  if (student.note >= 5) {
    student.approved = true;
  } else {
    student.reproved = true;
  }
}

function sendFlunkedMessage(student) {
  if (student.approved) {
    console.log(`${student.name} your note: ${student.note} Congrats ☻♥ `);
  } else {
    console.log(`${student.name} your note: ${student.note} Condolences `);
  }
}

checkStatusStudents(classA);
checkStatusStudents(classAB);

console.table(classA);
console.table(classAB);
