
//Callback hell
loginUser(user, function (err, users){
    if(err){
        console.log(err);
    }else{
        obtenerDatos(users.id, function(err, datos){
            if(err){
                console.log(err);
            }else{
                procesarDatos(datos, function(err, resultado){
                    if (err) {
                        console.log(err);
                    }else{
                        console.log('Todo listo: ', resultado);
                    }
                })
            }
        })
    }
})

// Async/await
async function Todo() {
    try{
        const user = await loginUser(user)
        const datos = await obtenerDatos(user.id)
        const resultado = await procesarDatos(datos)
        console.log('Todo listo', resultado);
    }catch(error){
        console.error(error)
    }
}

Todo()

//Promise
loginUser(user)
    .then(user => obtenerDatos(user.id))
    .then(datos => procesarDatos(datos))
    .then(resultado => console.log('Todo Listo', resultado))
    .catch(error => console.log(error))