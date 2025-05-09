//Sumatoria
//Array ordenado y numero dado, encuentra dos numeros cuya suma sea al numero dado
function sumatoria(array, num){
    let left = 0;
    let right = array.length -1;

    while(left < right){
        let suma = array[left] + array[right];

        if (suma === num) {
            return [array[left], array[right], suma]
        }else if(suma < num){
            left++;
        }else {
            right--;
        }
    }
    return [];
}

console.log(sumatoria([10,20,30,40,50,60,70,80],100));

//Eliminar los numeros duplicados
function removeDuplicate(arr){
    let i = 0;

    for(let j = 1; j < arr.length; j++){
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return arr.slice(0, i + 1);
}

console.log(removeDuplicate([20,20,10,30,40,40,50]));

let numeros = [20,10,20,40,50]
const numerosnuevos = numeros.filter((num, index) => numeros.indexOf(num) == index)
console.log(numerosnuevos);
