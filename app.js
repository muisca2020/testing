const calcular = (a, b) => {
    console.log("Calculando ....");
    let suma = a + b + b + a;
    return suma;
}

const num1 = 10;
const num2 = 15;

const resultado = calcular(num1, num2);
console.log(`El resultado de la función calcular ${num1} + ${num2} es: ${resultado}`);