/*let texto = "Hola soy Angie";

function hablar(texto) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.voice = speechSynthesis.getVoices().find(v => v.lang === "es-ES") || null;
    speechSynthesis.speak(utterance);
}

speechSynthesis.onvoiceschanged = () => hablar(texto);


console.log("**********ELEMENTOS DEL DOCUMENTO*********");

console.log(document.head)
*/

//DOM: Nodos, Elementos y Selectores

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

console.log(document.querySelector("#menu"));

console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach(el => console.log("el"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li "));