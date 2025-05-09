function step1(Callback) {
    setTimeout(() => {
        console.log('Paso 1 Completado');
        Callback()
    }, 2000)
}

function step2(Callback) {
    setTimeout(() => {
        console.log('Paso 2 Completado');
        Callback()
    }, 3000)
}

function step3() {
    setTimeout(() => {
        console.log('Paso 3 Completado');
    }, 1000)
}

step1(() => {
    step2(() => {
        step3()
    })
})