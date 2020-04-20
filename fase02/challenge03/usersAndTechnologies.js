const usuarios = [
    { nome: 'Thyago', tecnologias: ['javaScript','node Js'],},
    { nome: 'Marcela', tecnologias: ['CSS','HTML','JavaScript'],},
    { nome: 'Fulano', tecnologias: ['ruby','php'], },
];

for ( usuario of usuarios ){
    console.log(` ${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}
