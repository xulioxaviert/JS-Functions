//Iteración #1: Buscar el máximo**
//Completa la función que tomando dos números como argumento devuelva el más alto.

let numberOne = 100;
let numberTwo = 50;

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(
      "El primer número " + numberOne + " es mayor que el segundo " + numberTwo
    );
  } else {
    console.log(
      "El segundo número " + numberTwo + " es mayor que el primero " + numberOne
    );
  }
}

sum(numberOne, numberTwo);
