/*const calcular = (a, b) => {
    console.log("Calculando ....");
    let suma = a + b + b + a;
    return suma;
}

const num1 = 10;
const num2 = 15;

const resultado = calcular(num1, num2);
console.log(`El resultado de la función calcular ${num1} + ${num2} es: ${resultado}`); 
*/

exports.rgbToHex = function (r, g, b) {
    let redHex = r.toString(16);
    let greenHex = g.toString(16);
    let blueHex = b.toString(16);

    return transform(redHex) + transform(greenHex) + transform(blueHex);
}

function transform(hex) {
    return (hex.length === 1 ? "0" + hex :  hex);
}

exports.hexToRgb = function(hex) {
    let red = parseInt(hex.substring(0, 2), 16);
    let green = parseInt(hex.substring(2, 4), 16);
    let blue = parseInt(hex.substring(4, 6), 16);

    return [red, green, blue];
}