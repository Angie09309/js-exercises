import Saludar, {greet, PI, user} from "./constant.js";
import {arithmetica as calculos} from "./arithmetic.js";

console.log("Archivo modulos.js");
console.log(PI, user,);
// console.log(arithmetica.restar(3,4));
console.log(calculos.sumar(3,4));
greet();
let saludo = new Saludar();
saludo;