/*
// Callbacks
function decirHolaAlUsuario(usuario) {
  return "Hola " + usuario + "!";
}

function decirAdiosAlUsuario(usuario) {
  return "Adiós " + usuario + "!";
}

function crearSaludo(usuario, callback) { // Se puede poner cualquier etiqueta en vez de "cb"
  return callback(usuario);
}

console.log(crearSaludo("Dan", decirHolaAlUsuario)); // 'Hello Dan!'
console.log(crearSaludo("Dan", decirAdiosAlUsuario)); // 'Goodbye Dan!'


// Mas metodos de arrays: forEach **
const autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];

// Sin callback:
for(var i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}

// Podemos escribir el callback en los paréntesis como una función anónima
autos.forEach(function (elemento, indice) { // El indice no se usa. Por eso esta apagado.
  console.log(elemento);
});

// O podemos crear una instancia de una función para usarla como callback.
// Además, no necesitamos usar el argumento de índice, si no lo necesitas, no dudes en omitirlo.
function mostrarNombres(elemento) {
  console.log(elemento);
}
// And call that function in the forEach parentheses
autos.forEach(mostrarNombres);


// **.reduce **
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const palabras = ["Hola,", "mi", "nombre", "es", "Martin"];

// Podemos escribir la función anónima directamente en los paréntesis de .reduce
// Si omitimos el elemento inicial, siempre comenzará en el primer elemento.
const suma = numeros.reduce(function (acc, elemento) {
  console.log("acc = " + acc);
  console.log("elemento = " + elemento);
  return acc + elemento;
});
console.log(suma); // 45

// Podemos escribir una función fuera de los parents de .reduce (para usar varias veces más tarde)
function multiplicarDosNumeros(a, b) {
  console.log("a = " + a);
  console.log("b = " + b);
  return a * b;
}
const productos = numeros.reduce(multiplicarDosNumeros);
console.log(productos); // 362880

// .reduce funciona en cualquier tipo de datos.
// En este ejemplo configuramos un acumulador de arranque
const frases = palabras.reduce(function (acc, elemento) {
  return acc + " " + elemento;
}, "Frase completa:");
console.log(frases); // "Frase completa: Hola, mi nombre es Martin"


// **.map**
const numeros2 = [2, 3, 4, 5];

const doble = numeros2.map(function (elemento) {
  console.log("elemento = " + elemento);
  console.log("elemento * 2 = " + elemento * 2);
  return elemento * 2;
});

function multiplicarPorTres(elemento) {
  console.log("elemento = " + elemento);
  console.log("elemento * 3 = " + elemento * 3);
  return elemento * 3;
}
const triple = numeros2.map(multiplicarPorTres);

console.log(doble); // [ 4, 6, 8, 10 ]
console.log(triple); // [ 6, 9, 12, 15 ]
*/

// Pruebas del Homework
function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var nom = nombre.split("");
  nom[0] = nom[0].toUpperCase();
  return nom.join("");
};
console.log(mayuscula("nelson"));

// Otra forma:
function mayuscula2(nombre) {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
};
console.log(mayuscula2("maria"));