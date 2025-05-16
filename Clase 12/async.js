function obtenerUsuario() {
    return new Promise((resolve)=>{
        setTimeout(() => resolve({id:124, nombre:'Jose'}), 1000)
    })
}

function obtenerPublicaciones() {
    return new Promise((resolve) => {
        setTimeout(() => resolve([
            {id:555, titulo:'Post 1'},
            {id:535, titulo:'Post 2'}
        ]),2000)
    })
}

async function mostrarDatos() {
    try{
        const user = await obtenerUsuario();
        console.log('Usuario: ', user.nombre);
        const publicacion = await obtenerPublicaciones();

        console.log('Publicacion de Usuario');
        publicacion.forEach(post => console.log('---', post.titulo))
    }catch(error){
        console.error('Alerta Roja', error);
    }
}

mostrarDatos();