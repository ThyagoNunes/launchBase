//  create classMedia
//  create sendMessageForClass
//  create checkStatusStudents
//  create targetStatusStudent
//  create sendMessageForStatusStudent
const studentsClassA = [
  { name: "thyago veigan nunes", note: 10 },
  { name: "marcela xuxu meu", note: 9 },
  { name: "jackson do pandeiro", note: 8 },
  { name: "sarah aventureira", note: 7 },
];

const studentsClassB = [
  { name: "alessandro rapariga das zoropa", note: 6 },
  { name: "ronaldo manja quimica", note: 5 },
  { name: "hugo universe", note: 4 },
  { name: "neto do lolzim", note: 3 },
];

function classMedia(students) {
  // ► make sum notes and return media class ►
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].note;
  }
  const media = sum / students.length;
  return media;
}

function sendMessageForClass(media, studentsClass) {
  // ► send message approved or reproved FOR class ►
  if (media >= 5) {
    console.log(`${studentsClass} has media: ${media}, congrats ♥☻`);
  } else {
    console.log(`${studentsClass} has media: ${media}, condolences `);
  }
}

function checkStatusStudents(students) {
  // ► verified student "X" and target (approved or reproved ) after return status (approved/reproved ) ►
  for (let student of students) {
    targetStatusStudent(student);
    sendMessageForStatusStudent(student);
  }
}

function targetStatusStudent(student) {
  // ► target student "X"! Storage value TRUE or FALSE and wait for called in function CHECKSTATUSSTUDENS ►
  student.reproved = false;
  student.approved = false;
  if (student.note >= 5) {
    student.approved = true;
  } else {
    student.reproved = true;
  }
}

function sendMessageForStatusStudent(student) {
  // ► after receive value TRUE or FALSE, return message for student verified. based in conditional \/
  if (student.approved) {
    console.log(`${student.name} your note: ${student.note} Congrats ☻♥ `);
  } else {
    console.log(`${student.name} your note: ${student.note} Condolences `);
  }
}

checkStatusStudents(studentsClassA);
checkStatusStudents(studentsClassB);
console.table(studentsClassA);
console.table(studentsClassB);
