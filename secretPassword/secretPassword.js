let password = "0930";
let attempts = 0;
let maxIntents = 3;

while (attempts < maxIntents) {
    let secretPassword = prompt("Ingresa la contraseña secreta en números de 4 dígitos:");

    if (!secretPassword) {
        alert("No puedes dejar el campo vacío.");
        continue; // Vuelve al inicio del bucle sin contar el intento
    }

    attempts++;

    if (secretPassword === password) {
        alert(`¡Felicidades! Adivinaste la contraseña secreta en ${attempts} intentos.`);
        break; // Termina el bucle si adivina la contraseña
    } else {
        alert(`Lo siento, la contraseña es incorrecta. Te quedan ${maxIntents - attempts} intentos.`);
    }
}

if (attempts === maxIntents) {
    alert("Has agotado todos tus intentos. La contraseña era: " + password);
}
