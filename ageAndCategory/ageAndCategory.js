let age = prompt("Ingresa tu edad");

age = Number(age); // Convertir a número

if (isNaN(age) || age < 0) {
    alert("Por favor, ingresa una edad válida."); // Validar entrada
} else if (age < 13) {
    alert("Eres un niño/a.");
} else if (age >= 13 && age <= 17) { // Agregada condición para adolescente
    alert("Eres un adolescente.");
} else if (age >= 18 && age <= 64) {
    alert("Eres un adulto/a.");
} else {
    alert("Eres un adulto mayor.");
}
