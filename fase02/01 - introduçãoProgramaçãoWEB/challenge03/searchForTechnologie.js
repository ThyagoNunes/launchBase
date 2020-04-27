const users =  [ 
    { name: 'thyago', tecnologies: ['JavaScript','nodeJs','react','react native','css','html']},
    { name: 'marcela', tecnologies: ['JavaScript','nodeJs','react','react native','html']},
    { name: 'fulano', tecnologies: ['JavaScript','nodeJs','react','react native','css','html']}
];

// ► Check all users and return TRUE IF condition to satisfy OR FALSE case this condition not satisfy ►
function checkUserUseTecnologie ( users ) {                 
    for( let tencologie of users.tecnologies ) {
        if( tencologie == 'css') return true;
    }
    return false;
}

for ( let i = 0 ; i < users.length; i++){
    const checkUser = checkUserUseTecnologie(users[i])
        if(checkUser){
            console.log(`${users[i].name} use tecnologie`)
    }
}
