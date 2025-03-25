class Contacto {
    constructor(nombre, puesto, empresa, correo, numero) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.empresa = empresa;
        this.correo = correo;
        this.numero = numero;
    }
}
const contactos = [
    new Contacto("Juan", "Developer", "TechCorp", "juan@techcorp.com", "1234567890"),
    new Contacto("Maria", "Designer", "DesignStudio", "maria@designstudio.com", "0987654321"),
    new Contacto("Carlos", "Manager", "BusinessInc", "carlos@businessinc.com", "1122334455"),
    new Contacto("Ana", "Developer", "TechCorp", "ana@tech.com", "5432167890"),
];
const tarjeta = (contacto) => {
    return `Hola, mi nombre es ${contacto.nombre},
     trabajo en ${contacto.empresa} como ${contacto.puesto}. 
     Puedes contactarme en ${contacto.correo} o al número ${contacto.numero}. \n `;
}
contactos.forEach(contacto => {
    console.log(tarjeta(contacto));
})



const contactos1 = [
    {
        nombre: "Carlos Sanchez",
        puesto: "Desarrollador Web",
        empresa: "Tech Solutions",
        correo: "carlos.sanchez@techsolutions.com",
        telefono: "+52 55 1234 5678"
    },
 
];
const generarTarjeta = (contacto) => {
return `============================
    Nombre: ${contacto.nombre}
    Puesto: ${contacto.puesto}
    Empresa: ${contacto.empresa}
    Correo: ${contacto.correo}
    Telefono: ${contacto.telefono}
============================ `;
};

contactos1.forEach(contacto => {
    console.log(generarTarjeta(contacto));
})