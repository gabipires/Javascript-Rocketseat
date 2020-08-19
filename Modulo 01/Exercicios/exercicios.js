// Exercício 01

/* Crie uma função que dado o objeto a seguir:
    var endereco = {rua: "Rua dos pinheiros", numero: 1293, bairro: "Centro", cidade: "São Paulo", uf: "SP"};
   Retorne o seguinte conteúdo: "O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293."" */
   
var endereco = {
    rua: "Rua da Felicidade",
    numero: 100,
    bairro: "Butantã",
    cidade: "São Paulo",
    uf:'SP'
};

console.log('O usuário mora em', endereco.cidade, "/", endereco.uf, "no bairro", endereco.bairro, "na rua", endereco.rua, "com nº", endereco.numero); // O usuário mora em São Paulo/SP no bairro Butantã, na Rua da Felicidade com nº 100.

/* ===================================================================================================================================== */

// Exercício 02

/* Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
 // código aqui
}
pares(32, 321); */


function pares (x, y){
    for (var x; x <= y; x++){
        if (x % 2 === 0)
        console.log(x) 
    }
};

pares(1,10); // 2, 4, 6, 8, 10

/* ===================================================================================================================================== */

// Exercício 03

/* Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false */

function temHabilidade(skills){
    return skills.indexOf("Javascript")>=0
    };


var skills =  ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));


/* ===================================================================================================================================== */

// Exercício 04

/* Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master */

function experiencia(anos) {
    switch (true){
        case anos <= 1:
            return "Iniciante";
        case anos > 1 && anos <= 3:
            return "Intermediário";
        case anos > 3 && anos <= 6:
            return "Avançado";
        case anos >= 7:
            return "Jedi Master"
   }
};

var anos = 1;
console.log(experiencia(anos)); // Iniciante



/* ===================================================================================================================================== */

// Exercício 05

/* Dado o seguinte vetor de objetos:
var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];
Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir */


var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];
   
   
   function formaFrase(usuarios){
   
   for (var usuario of usuarios){
       console.log('O ' + usuario.nome + ' possui as habilidades ' + usuario.habilidades.join())
   }
   
   }
   
   formaFrase(usuarios);