
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

console.log(numeroAleatorio);

let intentos = 0;
let maxIntentos = 5;

while (intentos < maxIntentos) {
    let numeroUsuario = prompt("Adivina el número (1-10). Intentos restantes: " + (maxIntentos - intentos));

    // Si el usuario decide rendirse
    if (numeroUsuario.toLowerCase() === "salir") {
        alert("Has decidido rendirte. El número era: " + numeroAleatorio);
        break;
    }
    // Convertir el valor ingresado por el usuario a número
    numeroUsuario = Number(numeroUsuario);

    // Validar si el usuario ingresó un número válido
    if (isNaN(numeroUsuario)) {
        alert("Por favor, ingresa un número válido.");
        continue; // Volver al inicio del bucle si el valor no es un número
    }


    // Incrementar el contador de intentos
    intentos++;

    // Dar pistas si el número es mayor o menor
    if (numeroUsuario === numeroAleatorio) {
        alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
        break; // Terminar el bucle si adivina el número
    } else if (numeroUsuario > numeroAleatorio) {
        alert("El número es menor.");
    } else {
        alert("El número es mayor.");
    }
}

if (intentos === maxIntentos && numeroUsuario !== numeroAleatorio) {
    alert("Lo siento, has agotado los intentos. El número era: " + numeroAleatorio);
}