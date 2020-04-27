const infoDev01 = {
  //  inside object use : and not =
  name: "Thyago Nunes",
  age: 26,
  technologies: [
    { nameOfTechnologie: "JavaScript", espcialtyTechnolgie: "web/mobile" },
  ],
};

const infoDev02 = {
  name: "Marcela soares",
  age: 22,
  technologies: [{ nameOfTechnologie: "C#", espcialtyTechnolgie: "Desktop" }],
};

const infoDev03 = {
  name: "Fulano de Tal",
  age: "Unknown",
  technologies: [
    { nameOfTechnologie: "PYTHON", espcialtyTechnolgie: "Data Science" },
    { nameOfTechnologie: "JAVA", espcialtyTechnolgie: "Desktop" },
    { nameOfTechnologie: "PHP", espcialtyTechnolgie: "Web" },
  ],
};

console.log("\n");
console.log(
  `The user ${infoDev01.name} has ${infoDev01.age} years and use technologie ${infoDev01.technologies[0].nameOfTechnologie} with specialty ${infoDev01.technologies[0].espcialtyTechnolgie}\n`
);
console.log(
  `The user ${infoDev02.name} has ${infoDev02.age} years and use technologie ${infoDev02.technologies[0].nameOfTechnologie} with specialty ${infoDev02.technologies[0].espcialtyTechnolgie}\n`
);
console.log(
  `The user ${infoDev03.name} has age ${infoDev03.age} and use technologie ${infoDev03.technologies[0].nameOfTechnologie} with specialty ${infoDev03.technologies[0].espcialtyTechnolgie}\n`
);
console.log(
  `The user ${infoDev03.name} has age ${infoDev03.age} and use technologie ${infoDev03.technologies[1].nameOfTechnologie} with specialty ${infoDev03.technologies[1].espcialtyTechnolgie}\n`
);
console.log(
  `The user ${infoDev03.name} has age ${infoDev03.age} and use technologie ${infoDev03.technologies[2].nameOfTechnologie} with specialty ${infoDev03.technologies[2].espcialtyTechnolgie}\n`
);