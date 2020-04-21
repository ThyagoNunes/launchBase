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

function checaSeUsuarioUsaCSS(usuarios) {
    for (tecnologia of usuarios.tecnologias) {
      if (tecnologia == "CSS") return true;
    }
    return false;
  }

  
for (let i = 0; i < usuarios.length; i++) {
  const usuarioUsaCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  if(usuarioUsaCSS){            // true
      console.log(`${usuarios[i].nome}`);
  }
  else{                         // false
      console.log('não manja de css')
  }
}
=================================================
