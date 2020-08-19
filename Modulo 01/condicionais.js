function retornaSexo(sexo){
    if (sexo == 'M'){
        return 'Masculino';
    } else if(sexo == 'F')
        return 'Feminino';
    else {
        return 'Outro'
}}

var resultado = retornaSexo('M')
console.log(resultado)

// Quando trabalhamos com muitos ifs em cima da mesma variável, podemos usar o switch case
function retornaSexo(sexo){
    switch (sexo){
        case 'M':
            return 'Masculino';
        case 'F' :
            return 'Feminino';
        default:
            return 'Outro'
    }
}

var resultado = retornaSexo('M')
console.log(resultado)
