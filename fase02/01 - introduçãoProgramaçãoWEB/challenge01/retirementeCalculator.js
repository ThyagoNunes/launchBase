const nome = "Thyago Nunes";
const sexo = "Ferminino";
const idade = 55;
const anosDeContribuicao = 30;

const aposentadoriaPorTempoDeContribuicao = idade + anosDeContribuicao;

if (sexo === "Masculino") {
  if (anosDeContribuicao >= 35 && idade >= 60) {
    console.log(`Nome: ${nome}, 
Sexo: ${sexo}. 
Você tem: ${idade} anos
Contribuiu: ${anosDeContribuicao} anos. 
Tem pontuação de: ${aposentadoriaPorTempoDeContribuicao} 
você pode se aposentar! `);
  } else {
    console.log(`Nome: ${nome}, 
Sexo: ${sexo}. 
Você tem: ${idade} anos
Contribuiu: ${anosDeContribuicao} anos. 
Tem pontuação de: ${aposentadoriaPorTempoDeContribuicao} 
você não pode se aposentar! `);
  }
} else if (sexo === "Ferminino") {
  if (anosDeContribuicao >= 30 && idade >= 55) {
    console.log(`Nome: ${nome}, 
Sexo: ${sexo}. 
Você tem: ${idade} anos
Contribuiu: ${anosDeContribuicao} anos. 
Tem pontuação de: ${aposentadoriaPorTempoDeContribuicao} 
você pode se aposentar! `);
  } else {
    console.log(`Nome: ${nome}, 
Sexo: ${sexo}. 
Você tem: ${idade} anos
Contribuiu: ${anosDeContribuicao} anos. 
Tem pontuação de: ${aposentadoriaPorTempoDeContribuicao} 
você não pode se aposentar! `);
  }
}
