//numero impar o par
let numero = prompt("Introduce un número:");

// Convertir a número
numero = Number(numero);

// Verificar si es un número válido
if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
} else if (numero % 2 === 0) {
    alert("El número es par.");
} else {
    alert("El número es impar.");
}

// Mostrar el resultado final
alert(`El número ingresado fue: ${numero}`);

