// AND  -  OR  -  NOT
var sexo = 'M', idade = 23;

//AND
if (sexo === 'M' && idade >= 18){
    console.log('OK')
}

// OR
if (sexo === 'M' ||  idade >= 18){
    console.log('OK')
}

// NOT
if (sexo !== 'M'){
    console.log('OK')
}

// Armazenar o valor das condições em um variável

var masculino;
if (sexo === 'M'){
    masculino = true;
} else {
    masculino = false;
}

console.log(masculino)


// Refatorando ainda mais o código acima

var masculino = sexo === 'M'