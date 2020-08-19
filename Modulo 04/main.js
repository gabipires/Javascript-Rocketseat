/* var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/gabipires')
xhr.send(null)


xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }

} */



/* var minhaPromisse = function(){
    return new Promise(function(resolve, reject){ //resolve e reject tabém são funções. O resolve é a função qe retornamos em caso de sucesso e a reject em caso de insucesso.
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/gabipires')
        xhr.send(null)

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição!')
                }
            } 
        }
    });
}

minhaPromisse()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    }); */


//Usando Axios

axios.get('https://api.github.com/users/gabipires')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });

