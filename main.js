let a = parseFloat(prompt('Escriba la nota del 1º trimestre'))
let b = parseFloat(prompt('Escriba la nota del 2º trimestre'))
let c = parseFloat(prompt('Escriba la nota del 3º trimestre'))

const notaFinal = (a, b, c) => {
    let promedio = (a + b + c) / 3; 
    return promedio; 
}

let promedioFinal = notaFinal(a, b, c);


if (promedioFinal >= 7) {
    alert('APROBADO. Su nota final es ' + promedioFinal + '\nFelices vacaciones')
}
else {
    alert('DESAPROBADO. Su nota final es ' + promedioFinal + '\nNos vemos en diciembre')
}
