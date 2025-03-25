const frutas = ["manzana", "fresa", "platano", "mango"];
let mixto = ["Ivan", true, 23, {ciudad: "Ciudad de Mexico"}]
let numeros = [1,1.5,2,2.5,3,3.5,4]

frutas.push("coco")
frutas.pop()

frutas.forEach(fruta => console.log(fruta))
console.log(frutas);

let mayores = numeros.filter(num => num >= 2.5)
console.log(mayores);

let cuadrado = numeros.map(num => num * num)
console.log(cuadrado);


function sumar(a,b){
    return a + b;
}

let persona = {
    nombre: "Ivan",
    saludar: function(){
        console.log("Hola mi nombre es " + this.nombre); 
    }
}

console.log(sumar(21,42));
persona.saludar()



//Metodos Basicos
let fila = ["Ivan", "Saul", "Magalli", "Alex", "Maria"]
fila.unshift("Nepomutsemo")
fila.push("Oscar")
fila.shift()

console.log(fila.length);
console.log(fila);


//Metodo Find
let decimales = [10, 20, 30, 40, 50]
let encontrado = decimales.find(num => num > 30 || num < 60)
console.log(encontrado);

let usuarios = [
    {id:24231513, user: "ivanfou"},
    {id:13223112, user: "ianricardo"},
    {id:12513523, user: "maria"}
]

let userFind = usuarios.find(usuario => usuario.id === 13223112);
console.log(userFind);


//Map
let users = [
    {nombre: "Ana", edad: 25},
    {nombre:"Juan", edad: 24},
    {nombre: "Carlos", edad: 28}
];

let nombres = users.map(usuario => usuario.nombre)
console.log(nombres);


let productos = [
    {nombre: "Coca cola", precio: 25},
    {nombre:"Galletas Maria", precio: 24},
    {nombre: "Cigarros", precio: 28}
]

let productoIva = productos.map(producto => ({
    ...producto, 
    precioIva: producto.precio * 1.16
}))

console.log(productoIva);


//Filter
let pacientes = [
    {nombre: "Ana", edad: 25},
    {nombre:"Juan", edad: 17},
    {nombre: "Carlos", edad: 28},
    {nombre: "Johan", edad: 18}
]

let menoresEdad = pacientes.filter(paciente => paciente.edad <= 18)
console.log(menoresEdad);


let palabras = ["Oye", "M*mon", "Devuelveme", "a", "mi"]
let conLetraE = palabras.filter(palabra => palabra.includes("e"))
console.log(conLetraE);


//Sort
let ordenamiento = [20,124,21,24123,10,9,903,53]
ordenamiento.sort((a,b) => b - a);
console.log(ordenamiento);


let words = ["Amigo", "Operacion", "ambicion", "Ascii", "Botella"]
words.sort()
console.log(words);


pacientes.sort((a,b) => a.edad - b.edad)
console.log(pacientes);

let numbers = [2,5,3,55,63,20]

let ordenado = numbers.toSorted((a,b) => a - b)
console.log(ordenado);
