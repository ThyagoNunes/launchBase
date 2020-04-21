const usuarios = [
  { nome: "Thyago", tecnologias: ["javaScript", "node Js", "CSS"] },
  { nome: "Marcela", tecnologias: ["C", "HTML", "JavaScript"] },
  { nome: "Fulano", tecnologias: ["ruby", "php", "spring"] },
];

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

