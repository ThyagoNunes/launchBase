const usuarios =  [ 
    { nome: 'thyago', tecnologias: ['JavaScript','nodeJs','react','react native','css','html']},
    { nome: 'marcela', tecnologias: ['JavaScript','nodeJs','react','react native','html']},
    { nome: 'fulano', tecnologias: ['JavaScript','nodeJs','react','react native','css','html']}
];

function checaSeUsuarioUsaCSS (usuarios){
    for(tecnologia of usuarios.tecnologias){
        if(tecnologia == 'css') return true;
    }
    return false;
}

for ( let i = 0 ; i < usuarios.length ; i++ ) { 
    const usuarioUsaTecnologia = checaSeUsuarioUsaCSS(usuarios[i]);
    if(usuarioUsaTecnologia) console.log(`${usuarios[i].nome} usa CSS`);
}
