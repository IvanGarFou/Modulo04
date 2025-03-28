//Reduce
const numeros = [1,5,5,6,3,6];
const suma = numeros.reduce((acu, num) => acu + num,0);
console.log(suma);

const valor = [10,29,58,109,324,3,2,4];
const maximo = valor.reduce((acu, num) => Math.max(acu, num), valor[0])
console.log(maximo);

const letras = ['b','c','x','f','f','x','y'];
const contar = letras.reduce((acu, letra) => {
    acu[letra] = (acu[letra] || 0) + 1;
    return acu;
},{})
console.log(contar);


const productos = [
    {nombre: "Manzana", categoria: "Fruta"},
    {nombre: "Aguacate", categoria: "Fruta"},
    {nombre: "Jitomate", categoria: "Verdura"},
    {nombre: "Chayote", categoria: "Verdura"}
];

const agrupacion = productos.reduce((acu, producto) => {
    (acu[producto.categoria] = acu[producto.categoria] || []).push(producto.nombre)
    return acu;
},{})

console.log(agrupacion);


//Every
const numerica = [10,4,7,9,1,1]
const negativos = numerica.every(num => num < 0);
console.log(negativos);

const users = [
    {nombre: "Maria", edad: 20},
    {nombre: "Julio", edad: 80},
    {nombre: "Denisse", edad: 20}
]

const todosMayores = users.every(user => user.edad >= 18)
console.log(todosMayores);

const inventario = [
    {nombre: "Mac Air 13", disponible: true},
    {nombre: "Hp Notebook", disponible: false},
    {nombre: "Huawei", disponible: false}
]

const todosDisponibles = inventario.every(producto => producto.disponible)
console.log(todosDisponibles);


//Includes
const texto = "Aprender Javascript es sumamente genial!!"
console.log(texto.includes("Javascript"));

const permisos = ["admin", "user", "editor"]
console.log(permisos.includes("administrador"));


//Some
const numerico = [1,-2,5,-3,5,5]
const hayPositivo = numerico.some(nume => nume > 0)
console.log(hayPositivo);


const usuario = [
    {nombre: "Juan", rol: "usuario"},
    {nombre: "Ivan", rol: "admin"},
    {nombre: "Ian", rol: "editor"}
]

const admin = usuario.some(us => us.rol === "admin")
console.log(admin);
