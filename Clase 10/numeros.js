function duplicar(numero, callback){
    let resultado = numero * 2
    callback(resultado)
}

function duplicado(resultado) {
    console.log(`El numero duplicado es; `, resultado);
}

duplicar(25, duplicado)