# launchBase
curso launcheBase

function returnAverage(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].note;
  }
  const media = sum / students.length;
  return media;
}

================================================

for ( usuario of usuarios ){                                                         // varrer todos os usuários 
    console.log(` ${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)   // .join junta os valores do array! 
}

=================================================
