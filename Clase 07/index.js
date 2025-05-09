function binarySearch(array, target){
    let left = 0;
    let rigth = array.length - 1

    while(left <= rigth){
        const middle = Math.floor((left + rigth)/ 2);
        const mid = array[middle]

        if(mid === target){
            return middle;
        }else if(mid < target){
            left = middle + 1
        }else{
            rigth = middle - 1;
        }
    }

    return -1
}

const numeros = [20,40,60,80,90,100]
const target = 90

const resultado = binarySearch(numeros, target)
console.log('El numero buscado esta en la posicion: ', resultado);
