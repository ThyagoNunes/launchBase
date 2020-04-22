const users = [
    {
        name: 'Marcela Soares Barros',
        incomes: [200, 950, 285],
        expenses: [115, 285, 79.90, 80, 100, 5, 100]
    },

    {
        name: 'Thyago Oliveira Nunes',
        incomes: [1500, 240],
        expenses: [240, 115, 50, 33, 100, 5, 100]
    }
];

function calculateBalance( incomes, expenses ){
    const sumIncomes = sumNumbers(incomes);
    const sumExpenses = sumNumbers(expenses);

    return sumIncomes - sumExpenses;
}

function sumNumbers(numbers){
    let sum = 0 ;
    for( let number of numbers ){
        sum += number
    }
    return sum;
}

for( let user of users ){
    const balance = calculateBalance(user.incomes, user.expenses);
        if(balance >= 0.1) { 
            console.log(`${user.name} Congrats, balance positive ${balance.toFixed(2)} Reais \n`);
        }
        else{
            console.log(`${user.name} Condolences, balance negative ${balance.toFixed(2)} Reais \n`)
        }
}