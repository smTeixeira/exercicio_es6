const alunos = [
    { nome: 'Gustavo', nota: 5, },
    { nome: 'Julia', nota: 6, },
    { nome: 'Paula', nota: 4, },
    { nome: 'Wagner', nota: 2 }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados);

// alunos.forEach(function (alunos) {
//     console.log(`Nome: ${alunos.nome}, Nota: ${alunos.nota}:`);
// })
