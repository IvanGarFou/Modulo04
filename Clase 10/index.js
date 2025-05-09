function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

function procesarUsuario(nombre, nocallback){
    nocallback(nombre)
}

function despedir(nombre){
    console.log(`Adios ${nombre}`);
}

procesarUsuario('Ivan', despedir)