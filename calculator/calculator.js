let numero1 = prompt("Introduce el primer número:");
let numero2 = prompt("Introduce el segundo número:");

numero1 = Number(numero1);
numero2 = Number(numero2);

let operacion = prompt("¿Qué operación desea realizar? (+, -, *, /)");

if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, ingresa números válidos.");
} else if (operacion === "+") {
    alert(`El resultado de la suma es: ${numero1 + numero2}`);
} else if (operacion === "-") {
    alert(`El resultado de la resta es: ${numero1 - numero2}`);
} else if (operacion === "*") {
    alert(`El resultado de la multiplicación es: ${numero1 * numero2}`);
} else if (operacion === "/") {
    if (numero2 === 0) {
        alert("Error: No se puede dividir entre cero.");
    } else {
        alert(`El resultado de la división es: ${numero1 / numero2}`);
    }
} else {
    alert("Operación no válida. Por favor, elige entre +, -, *, /.");
}
