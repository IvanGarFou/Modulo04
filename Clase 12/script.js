function obtenerUsuario() {
    return new Promise((resolve)=>{
        setTimeout(() => resolve({id:124, nombre:'Jose'}), 1000)
    })
}

function obtenerPublicaciones() {
    return new Promise((resolve) => {
        setTimeout(() => resolve([
            {id:124, titulo:'Post 1'},
            {id:124, titulo:'Post 2'}
        ]),2000)
    })
}


obtenerUsuario()
    .then((usuario) => {
        console.log('Usuario:', usuario.nombre);
        return obtenerPublicaciones();
      })
    .then(publicaciones => {
        console.log('Publicacion del usuario: ');
        publicaciones.forEach(post => console.log('---', post.titulo))
    })
    .catch((error) => {
        console.error('Alerta Roja', error);
      });
